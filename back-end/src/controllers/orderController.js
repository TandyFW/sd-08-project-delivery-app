const rescue = require('express-rescue');
const orderServices = require('../services/orderService');
const success = require('../utils/success');

const createorder = rescue(async (req, res, next) => {
 // const { name, email, password, role } = req.body;
 // const result = await orderServices.create({ name, email, password, role });
 // if (result.error) return next(result);
 // res.status(success.Created).json({ neworder: result });
});

const getAllorders = rescue(async (_req, res, next) => {
  const result = await orderServices.getAll();
  if (result.error) return next(result);
  res.status(success.OK).json({ orders: result });
});
const getAllAllorders = rescue(async (_req, res, next) => {
  const result = await orderServices.getAllAll();
  if (result.error) return next(result);
  res.status(success.OK).json({ orders: result });
});

const getByIdorder = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await orderServices.getById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ order: result });
});

const updateByIdorder = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const result = await orderServices.updateById(id, { name, email, password, role });
  if (result.error) return next(result);
  res.status(success.OK).json({ message: result });
});

const deleteByIdorder = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await orderServices.deleteById(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ order: result });
});

module.exports = {
  createorder,
  getAllorders,
  getByIdorder,
  updateByIdorder,
  deleteByIdorder,
  getAllAllorders,
};
