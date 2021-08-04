const orderSellerDetailService = require('../services/orderSellerDetailService');

const orderProduct = async (req, res) => {
  const { id } = req.params;
 
  const { statusCode, json } = await orderSellerDetailService.findOrdersById(id);
  res.status(statusCode).json(json);
};

module.exports = orderProduct;
