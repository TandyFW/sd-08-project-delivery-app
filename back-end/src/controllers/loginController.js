const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { statusCode, json } = await loginService.findUser(email, password);
  res.status(statusCode).json(json);
};

module.exports = login;