const jwt = require('jsonwebtoken');
const path = require('path');

const secret = require("fs")
.readFileSync(path.join(__dirname, '..', '..', 'jwt.evaluation.key'), { encoding: "utf-8" })
.trim();

const jwtConfig = {
  expiresIn: '60min',
  algorithm: 'HS256'
};

const createToken = (data) => {
  const token = jwt.sign({data}, secret, jwtConfig);
  return token;
};

const validateToken = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = { createToken, validateToken };
