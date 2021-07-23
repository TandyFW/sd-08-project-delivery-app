const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const generateToken = (email) => jwt.sign({ email }, JWT_SECRET, jwtConfig);

module.exports = {
  generateToken,
};
