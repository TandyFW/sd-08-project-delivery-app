const jwt = require('jsonwebtoken');
const fs = require('fs');

const { findByName, findByEmail } = require('./services/UserService');

const generateJWTToken = (user) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  console.log('secret: ', secret);
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role } }, secret, jwtConfig);
  return token;
};

const validateNewUserInfo = async (newUserInfo) => {
  const { name, email } = newUserInfo;
  const nameExists = await findByName(name);
  if (nameExists) return false;
  const emailExists = await findByEmail(email);
  if (emailExists) return false;
  return true;
};

module.exports = {
  generateJWTToken,
  validateNewUserInfo,
};