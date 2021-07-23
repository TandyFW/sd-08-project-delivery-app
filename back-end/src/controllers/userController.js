const rescue = require('express-rescue');
const userService = require('../services/userService');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (user.err) return next(user);
  res.status(200).json(user);
});

const registerClient = rescue(async (req, res, next) => {
  const { name, email, password } = req.body;
  const result = await userService.registerClient(name, email, password);
  if (result.err) return next(result);
  return res.status(201).json(result);
});

module.exports = {
  login,
  registerClient,
};
