const OrderService = require('../services/OrderService');

const getAllUserOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await OrderService.getUserOrders(id);
  return res.status(200).json(orders);
}

module.exports = { getAllUserOrders };