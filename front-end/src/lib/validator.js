import Joi from 'joi';

const MIN_PASSWORD = 6;

export const loginValidator = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(MIN_PASSWORD),
});

export const registerValidator = {};
