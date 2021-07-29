const JWT = require('jsonwebtoken');
const path = require('path');
const jwtKey = require('fs')
  .readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'),
    { encoding: 'utf-8' })
  .trim();
const { UNAUTHORIZED } = require('../services/statusCode');

const JWTCONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (req, _res, next) => {
  const { email } = req.body;
  const token = JWT.sign({ data: email }, jwtKey, JWTCONFIG);
  req.token = token;
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: 'invalid JWT' });
  }
  try {
    const decoded = JWT.verify(token, jwtKey);
    req.decoded = decoded.data;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: 'invalid JWT' });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
