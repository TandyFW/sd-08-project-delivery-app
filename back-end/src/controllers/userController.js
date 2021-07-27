const rescue = require('express-rescue');
const userService = require('../services/userService');

const PATHS = {
  administrator: '',
  seller: '',
  customer: 'customer/products',
};

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const { err, userInfo } = await userService.login(email, password);
  if (err) return next({ err });
  userInfo.path = PATHS[userInfo.role];
  return res.status(200).json(userInfo);
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
