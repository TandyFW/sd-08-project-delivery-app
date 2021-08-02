const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  sellerId: joi.number().required(),
  cart: joi.array(),
  deliveryAddress: joi.string().required(),
  deliveryNumber: joi.string().required()
});