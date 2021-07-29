const checkoutService = require('../services/checkoutService');

const checkout = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, array } = req.body;

  const { statusCode, json } = await checkoutService
    .creatCheckout({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, array });
  res.status(statusCode).json(json);
};

module.exports = checkout;
