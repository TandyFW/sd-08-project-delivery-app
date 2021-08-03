const OrderService = require('../services/OrderService');

const getAllUserOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await OrderService.getUserOrders(id);
  return res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await OrderService.getOrderById(id);
  return res.status(200).json(order);
};

module.exports = { getAllUserOrders, getOrderById };