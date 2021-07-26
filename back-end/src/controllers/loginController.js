const rescue = require('express-rescue');
const { OK } = require('../statusCode');

const LoginService = require('../services/loginService');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const userData = await LoginService.login(email, password);
  res.status(OK).json(userData);
});

module.exports = {
  login,
};
