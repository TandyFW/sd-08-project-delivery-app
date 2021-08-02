const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync(path
  .resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key'), 'utf-8');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const JWT = ({ id, email, role }) => jwt.sign({ id, email, role }, secret, jwtConfig);

module.exports = JWT;