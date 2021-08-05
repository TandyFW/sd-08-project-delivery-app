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

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const statusObject = req.body;
  try {
    const updatedOrder = OrderService.updateOrderStatus(id, statusObject);
    return res.status(202).json(updatedOrder);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAllUserOrders, getOrderById, updateOrderStatus };