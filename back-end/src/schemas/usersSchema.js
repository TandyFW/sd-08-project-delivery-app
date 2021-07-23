const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().min(3).required(),
});

module.exports = {
  createUser,
};
