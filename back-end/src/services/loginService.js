const { notFound } = require('@hapi/boom');
const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/auth');

const { validateLogin } = require('../schema/loginSchema');

const login = async (email, password) => {
  validateLogin(email, password);
  const passwordMd5 = md5(password);
  const user = await User.findOne({ where: { email, password: passwordMd5 } });
  if (!user) throw notFound('User not found');
  const token = generateToken(email);
  delete user.dataValues.password;

  return {
    ...user.dataValues,
    token,
  };
};

module.exports = {
  login,
};
