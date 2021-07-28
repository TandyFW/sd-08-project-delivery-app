const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const { User } = require('../database/models');

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8').trim();

const generateJWTToken = (user) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const { name, email, role } = user;
  const token = jwt.sign({ data: { name, email, role } }, secret, jwtConfig);
  return token;
};

const findByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const validateNewUserInfo = async (newUserInfo) => {
  const { name, email } = newUserInfo;
  const nameExists = await findByName(name);
  if (nameExists) return false;
  const emailExists = await findByEmail(email);
  if (emailExists) return false;
  return true;
};

const create = async (newUserInfo) => {
  const isValid = await validateNewUserInfo(newUserInfo);
  if (!isValid) {
    return { error: { status: 409, message: 'Name or email already registered' } };
  }
  const { name, email, password } = newUserInfo;
  await User.create({ name, email, password: md5(password), role: 'customer' });
  return { name, email, role: 'customer' };
};

module.exports = { generateJWTToken, findByEmail, findByName, create };