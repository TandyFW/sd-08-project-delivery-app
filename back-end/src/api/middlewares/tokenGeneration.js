/*  Middleware para a geração de um token de usuário. */

const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

module.exports = (req, _res, next) => {
const { id, email } = req.body;

  const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { id, email } }, secret, jwtConfig);
  req.token = token;
  next();
};
