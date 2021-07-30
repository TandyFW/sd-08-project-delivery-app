const rescue = require('express-rescue');
const orderServices = require('../services/orderService');
const success = require('../utils/success');

const createOrder = rescue(async (req, res, _next) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, salesDate, status } = req.body;

  const result = await orderServices.createOrder({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, salesDate, status });

  res.status(success.Created).json({ newOrder: result });
});

const getAllOrdersByUserId = rescue(async (req, res, next) => {
  const { id } = req.dataUser;
  const result = await orderServices.getAllOrdersByUserId(id);
  if (result.error) return next(result);
  res.status(success.OK).json({ orders: result });
});

const getAllOrders = rescue(async (_req, res, next) => {
  const result = await orderServices.getAllOrders();
  if (result.error) return next(result);

  res.status(success.OK).json({ orders: result });
});

// const getByIdorder = rescue(async (req, res, next) => {
//   const { id } = req.params;
//   const result = await orderServices.getById(id);
//   if (result.error) return next(result);
//   res.status(success.OK).json({ order: result });
// });

// const updateByIdorder = rescue(async (req, res, next) => {
//   const { id } = req.params;
//   const { name, email, password, role } = req.body;
//   const result = await orderServices.updateById(id, { name, email, password, role });
//   if (result.error) return next(result);
//   res.status(success.OK).json({ message: result });
// });

// const deleteByIdorder = rescue(async (req, res, next) => {
//   const { id } = req.params;
//   const result = await orderServices.deleteById(id);
//   if (result.error) return next(result);
//   res.status(success.OK).json({ order: result });
// });

module.exports = {
  createOrder,
  getAllOrders,
  getAllOrdersByUserId,
};
