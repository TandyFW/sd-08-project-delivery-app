const orderProductService = require('../services/orderProductService');

const orderProduct = async (req, res) => {
  const { id } = req.params;
 
  const { statusCode, json } = await orderProductService.findOrdersById(id);
  res.status(statusCode).json(json);
};

module.exports = orderProduct;
