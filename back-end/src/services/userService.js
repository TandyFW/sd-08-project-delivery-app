const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../database/models');
const userErrors = require('../schema/userErrors');

const generateToken = async (email, role) => {
  // const SECRET = await fs.readFileSync('jwt.evaluation.key', {
  //   encoding: 'utf8',
  //   flag: 'r',
  // });
  const SECRET = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const user = { email, role };
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  return token;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return userErrors.userNotFound;
  }
  if (md5(password) !== user.password) {
    return userErrors.wrongPassword;
  }
  const token = await generateToken(email, user.role);
  const userInfo = {
    name: user.name,
    email: user.email,
    token,
    role: user.role,
  };
  return { userInfo };
};

const registerClient = async (name, email, password) => {
  const nameAlredyExists = await User.findOne({ where: { email } });
  const emailAlredyExists = await User.findOne({ where: { name } });
  console.log('name:', !(nameAlredyExists && emailAlredyExists));
  if (nameAlredyExists || emailAlredyExists) return userErrors.emailOrNameAlreadyExists;
  const passwordMd5 = md5(password);
  await User.create({ name, email, password: passwordMd5, role: 'customer' });
  const token = await generateToken(email, 'customer');
  return token;
};

module.exports = {
  login,
  registerClient,
};
