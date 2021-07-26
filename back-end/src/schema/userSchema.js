const joi = require('joi');
const Code = require('../statusCode');

const userSchema = joi.object({
  name: joi.string().max(12).required(),
  email: joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }).required(),
  password: joi.string().min(6).required(),
  role: joi.string().required(),
});

const createUserValidation = (name, email, password, role) => {
  const { error } = userSchema.validate({ name, email, password, role });
  if (error) {
    error.code = Code.BAD_REQUEST;
    throw error;
  }
};

module.exports = {
  createUserValidation,
};
