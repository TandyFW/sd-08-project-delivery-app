const jwt = require('jsonwebtoken');

const secret = '8onzeDelivery8';

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
