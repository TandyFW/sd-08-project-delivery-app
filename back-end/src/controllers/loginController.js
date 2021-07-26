const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email } = req.body;

  const { statusCode, message } = await loginService.findUser(email);
  res.status(statusCode).json(message);
};

module.exports = login;