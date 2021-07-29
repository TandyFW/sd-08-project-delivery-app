const rescue = require('express-rescue');
const loginService = require('../services/loginService');
const success = require('../utils/success');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await loginService.login({ email, password });
  if (result.error) return next(result);

  res.status(success.OK).json({ token: result });
});

module.exports = {
  login,
};
