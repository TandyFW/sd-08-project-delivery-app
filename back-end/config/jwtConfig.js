require('dotenv').config();
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const SECRET = md5(process.env.JWT_SECRET);

const signToken = (payload) => jwt.sign(payload, SECRET, {
  expiresIn: '1d',
});
const verifyToken = (token) => jwt.verify(token, SECRET);
const decodeToken = (token) => jwt.decode(token, SECRET);
module.exports = {
  signToken,
  verifyToken,
  decodeToken,
};
