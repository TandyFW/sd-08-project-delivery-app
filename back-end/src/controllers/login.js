const rescue = require('express-rescue');
const joi = require('joi');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const UserService = require('../services/user');
const md5 = require('../utils/md5');

const SECRET_FILE_PATH = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const secret = fs.readFileSync(SECRET_FILE_PATH, 'utf-8').trim();

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const getJwtToken = (payload) => (
  jwt.sign(payload, secret, { expiresIn: '1d' })
);

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

  const { name, role } = user;

  res.json({ name, email, role, token });
});

module.exports = login;
