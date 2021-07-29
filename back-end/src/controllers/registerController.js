const registerService = require('../services/registerService');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const { statusCode, json } = await registerService.registerUser(name, email, password);
  res.status(statusCode).json({ json });
};

module.exports = register;
