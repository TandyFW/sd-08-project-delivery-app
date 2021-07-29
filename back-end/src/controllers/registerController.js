const registerService = require('../services/registerService');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const { statusCode, message } = await registerService.registerUser(name, email, password);

  res.status(statusCode).json(message);
};

module.exports = register;