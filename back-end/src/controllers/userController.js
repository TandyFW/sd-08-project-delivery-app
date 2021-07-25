const rescue = require('express-rescue');
const userServices = require('../services/userService');
const success = require('../utils/success');

const create = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const result = await userServices.create({ name, email, password, role });
  if (result.statusCode) return next(result);
  res.status(success.OK).json({ newUser: result });
});

const getAll = rescue(async (_req, res, next) => {
  const result = await userServices.getAll();
  if (result.error) return next(result);
  res.status(success.OK).json({ users: result });
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await userServices.getById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ user: result });
});

const updateById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const result = await userServices.updateById(id, { name, email, password, role });
  if (result.error) return next(result);
  res.status(success.OK).json({ message: result });
});

const deleteById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await userServices.deleteById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ user: result });
});

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
