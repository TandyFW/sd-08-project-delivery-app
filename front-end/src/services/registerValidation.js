import Joi from 'joi';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

const registerValidation = Joi.object({
  validName: Joi.string().min(MIN_NAME_LENGTH),
  validEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
  validPassword: Joi.string().min(MIN_PASSWORD_LENGTH),
});

export default registerValidation;
