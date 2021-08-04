const tcw = require('../utils').tryCatchWrapper;
const { userService } = require('../services');

const login = tcw(async (req, res, next) => {
  const { email, password } = req.body;
  const { result, error } = await userService.validateLogin({ email, password });
  if (error) return next(error);
  res.status(200).json(result);
});

const getUserById = tcw(async (req, res, next) => {
  const { id } = req.params;
  const { result, error } = await userService.getUserById(id);
  if (error) return next(error);
  res.status(200).json(result);
});

const getAllSellers = tcw(async (_req, res, _next) => {
  const { result } = await userService.getAllSellers();
  res.status(200).json(result);
});

const getAllUsers = tcw(async (_req, res, _next) => {
  const { result } = await userService.getAllUsers();
  res.status(200).json(result);
});

const removeUser = tcw(async (req, res, _next) => {
  const { id } = req.params;
  const { result } = await userService.removeUser(id);
  res.status(200).json(result);
});

module.exports = {
  getUserById,
  login,
  getAllSellers,
  getAllUsers,
  removeUser,
};