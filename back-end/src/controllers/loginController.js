const rescue = require('express-rescue');
const { OK } = require('../statusCode');

const LoginService = require('../services/loginService');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const token = await LoginService.login(email, password);
  res.status(OK).json({ token });
});

module.exports = {
  login,
};
