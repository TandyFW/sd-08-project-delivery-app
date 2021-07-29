const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  sellerId: joi.number().required(),
  totalPrice: joi.number().precision(2).required(),
  deliveryAddress: joi.string().required(),
  deliveryNumber: joi.string().required()
});