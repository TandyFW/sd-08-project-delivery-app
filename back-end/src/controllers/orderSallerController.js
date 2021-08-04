const orderSallerService = require('../services/orderSallerService');

const orders = async (req, res) => {
  const { id } = req.body;
 
  const { statusCode, json } = await orderSallerService.findOrders(id);
  res.status(statusCode).json(json);
};

module.exports = orders;
