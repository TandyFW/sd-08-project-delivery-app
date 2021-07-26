const rescue = require('express-rescue');
const userService = require('../services/userService');

const PATHS = {
  administrator: '',
  seller: '',
  customer: 'customer/products',
};

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const { err, token, role } = await userService.login(email, password);
  if (err) return next({ err });
  const path = PATHS[role];
  return res.status(200).json({ token, path });
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
