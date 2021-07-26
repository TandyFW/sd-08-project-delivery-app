const joi = require('joi');
const Code = require('../statusCode');

const loginSchema = joi.object({
  email: joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }).required(),
  password: joi.string().max(6).required(),
});

const validateLogin = (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    error.code = Code.BAD_REQUEST;
    throw error;
  }
};

module.exports = {
  validateLogin,
};
