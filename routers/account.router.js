const express = require("Express");
const router = express.Router();

const prefix = "/api/account";

const { loginValidator } = require("../middleware/account.validator");
const {
  loginController,
  registerController,
} = require("../controller/account.controller");

router.post(`${prefix}/login`, loginValidator, loginController);
router.post(`${prefix}/register`, registerController);

module.exports = router;
