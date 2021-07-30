const rescue = require('express-rescue');
const userService = require('../services/userService');

const PATHS = {
  administrator: 'admin/manage',
  seller: 'seller/orders',
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

const registerUserByManager = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const token = req.headers.authorization;
  const result = await userService.registerUserByManager({
    name,
    email,
    password,
    role,
    token,
  });
  if (result.err) return next(result);
  return res.status(201).json(result);
});

const getAllUsers = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  const result = await userService.getAllUsers(token);
  if (result.err) return next(result);
  return res.status(200).json(result);
});

const deleteUserByManager = rescue(async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const result = await userService.deleteUserByManager(token, id);
  if (result.err) return next(result);
  return res.status(200).json(result);
});

const getAllSeller = rescue(async (req, res, next) => {
  const resultService = await userService.getAllSeller();
  if (!resultService.seller) return next(resultService);
  return res.status(200).json(resultService);
});

module.exports = {
  login,
  registerClient,
  registerUserByManager,
  getAllUsers,
  deleteUserByManager,
  getAllSeller,
};
