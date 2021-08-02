const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const UserServices = require('../services/user');
const { secret } = require('../utils/jwt');

const auth = rescue(async (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) throw boom.badRequest('Missing token');

  const { id, email } = jwt.verify(token, secret);

  const user = await UserServices.findByEmail(email);

  if (!user) throw boom.badRequest('Usuário inválido');

  req.user = { id, email };

  next();
});

module.exports = auth;
