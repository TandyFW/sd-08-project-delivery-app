require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs
.readFileSync(`${__dirname}/../jwt.evaluation.key`)
.toString();

const signToken = (payload) => jwt.sign(payload, SECRET, {
  expiresIn: '1d',
});
const verifyToken = (token) => jwt.verify(token, SECRET);
const decodeToken = (token) => jwt.decode(token, SECRET);
module.exports = {
  signToken,
  verifyToken,
  decodeToken,
  SECRET,
};
