const rescue = require('express-rescue');
const userServices = require('../services/userService');
const success = require('../utils/success');

const createUser = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const result = await userServices.create({ name, email, password, role });
  if (result.error) return next(result);
  res.status(success.Created).json({ newUser: result });
});

const getAllUsers = rescue(async (_req, res, next) => {
  const result = await userServices.getAll();
  if (result.error) return next(result);
  res.status(success.OK).json({ users: result });
});

const getByIdUser = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await userServices.getById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ user: result });
});

const updateByIdUser = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const result = await userServices.updateById(id, { name, email, password, role });
  if (result.error) return next(result);
  res.status(success.OK).json({ message: result });
});

const deleteByIdUser = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await userServices.deleteById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ user: result });
});

module.exports = {
  createUser,
  getAllUsers,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
};
