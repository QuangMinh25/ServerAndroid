const jwt = require("jsonwebtoken");

const generateToken = (userName, secretSignature, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userName },
      secretSignature,
      {
        algorithm: "HS256",
        expiresIn: tokenLife, // hết hạn
      },
      (error, token) => {
        if (error) {
          return reject(error);
        }
        resolve(token);
      }
    );
  });
};

const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return reject(error);
      }
      resolve(decoded);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
