const db = require("../firebaseConfig");
const { generateToken } = require("../helper/jwt.helper");

const Account = db.collection("account");

const login = async (username, password) => {
  let _query = Account.where("username", "==", username);
  _query = _query.where("password", "==", password);

  let _result = null;

  await _query.get().then(async (querySnapshot) => {
    if (querySnapshot.size > 0) {
      await generateToken(
        username,
        process.env.SECRET_SIGNATURE,
        process.env.TOKEN_LIFE
      ).then((token) => {
        _result = token;
      });
    }
  });

  return _result;
};

const createAccount = async (username, password) => {
  return await Account.add({
    username,
    password,
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

const checkAccountExist = async (username) => {
  let _query = Account.where("username", "==", username);

  const _rs = await _query
    .get()
    ?.then((querySnapshot) => {
      if (querySnapshot?.size <= 0) {
        return false;
      } else {
        return true;
      }
    })
    .catch(() => {
      return false;
    });

  return _rs;
};

module.exports = {
  createAccount,
  checkAccountExist,
  login,
};
