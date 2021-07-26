const jwt = require('jsonwebtoken');
const fs = require('fs')

const secret = fs.readFileSync('jwt.evaluation.key');

module.exports = (req, res, next) => {
const userData = req.body;

  const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: userData }, secret, jwtConfig);
  req.token = token;
  next();
};
