import Joi from 'joi';

const MIN_PASSWORD_LENGTH = 6;

const loginValidation = Joi.object({
  validEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
  validPassword: Joi.string().min(MIN_PASSWORD_LENGTH),
});

export default loginValidation;
