const { notFound } = require('@hapi/boom');
const { User } = require('../database/models');
const { generateToken } = require('../utils/auth');

const { validateLogin } = require('../schema/loginSchema');

const login = async (email, password) => {
  validateLogin(email, password);
  const user = await User.findOne({ where: { email } });
  if (!user) throw notFound();
  const token = generateToken(email);
  return token;
};

module.exports = {
  login,
};
