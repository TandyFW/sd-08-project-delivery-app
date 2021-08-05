const orderService = require('../services/orderService');

const orders = async (req, res) => {
  const { id } = req.body;
  const { statusCode, json } = await orderService.findOrders(id);
  res.status(statusCode).json(json);
};

module.exports = orders;
