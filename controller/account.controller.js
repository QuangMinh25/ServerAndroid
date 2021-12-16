const {
  createAccount,
  checkAccountExist,
  login,
} = require("../service/account.service");

const { response } = require("../util");

const loginController = async (req, res) => {
  const _data = req?.body;

  const _rs = await login(_data?.username, _data?.password);

  if (_rs === null) {
    return res.send(
      response({
        status: 500,
        message: "Đăng nhập không thành công!",
        errors: ["Tên tài khoản hoặc mật khẩu không đúng!"],
      })
    );
  }

  return res.send(
    response({
      status: 200,
      message: "Đăng nhập thành công!",
      data: {
        token: _rs,
      },
    })
  );
};

const registerController = async (req, res) => {
  const _data = req?.body;

  const _checkAccountExist = await checkAccountExist(_data?.username);

  if (_checkAccountExist) {
    res.send(
      response({
        status: 500,
        errors: ["Tên tài khoản đã tồn tại!"],
        message: "Tạo tài khoản không thành công!",
      })
    );

    return;
  }

  const rs = await createAccount(_data?.username, _data?.password);

  if (rs) {
    return res.send(
      response({
        status: 200,
        message: "Tạo tài khoản thành công!",
      })
    );
  }

  res.send(
    response({
      status: 500,
      message: "Internal server error",
    })
  );
};

module.exports = {
  loginController,
  registerController,
};
