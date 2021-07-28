import Joi from 'joi';

const MIN_NAME = 12;
const MIN_PASSWORD = 6;

const schema = Joi.object({
  name: Joi.string().min(MIN_NAME),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(MIN_PASSWORD),
});

export default schema;
