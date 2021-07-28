const checkoutService = require('../services/checkoutService');

const checkout = async (req, res) => {
  const { user_id, seller_id, total_price, delivery_address, delivery_number, array } = req.body;

  const { statusCode, json } = await checkoutService.creatCheckout(user_id, seller_id, total_price, delivery_address, delivery_number, array);
  res.status(statusCode).json(json);
};

module.exports = checkout;
