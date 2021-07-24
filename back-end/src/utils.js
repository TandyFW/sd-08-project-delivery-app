const jwt = require('jsonwebtoken');
const fs = require('fs');

const generateJWTToken = (user) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  console.log('secret: ', secret);
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role } }, secret, jwtConfig);
  return token;
};

module.exports = {
  generateJWTToken,
};