const rescue = require('express-rescue');
const joi = require('joi');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const UserService = require('../services/user');
const md5 = require('../utils/md5');

const secret = fs.readFileSync(
  path.resolve(__dirname, '..', '..', 'jwt.evaluation.key'),
);

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const getJwtToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, jwtConfig);
};

const login = rescue(async (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) throw error;

  const { email, password } = req.body;

  const user = await UserService.findByEmail(email);

  if (!user) throw boom.notFound('User not found');

  if (user.password !== md5(password)) {
    throw boom.unauthorized('Invalid user');
  }

  const token = getJwtToken({ id: user.id, email });

  res.json({ token });
});

module.exports = login;
