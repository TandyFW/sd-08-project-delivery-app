const md5 = require('md5');
const { User } = require('../database/models');
const { validateNewUserInfo } = require('../utils');

const findByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  const { password, ...data } = user;
  return data;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  const { password, ...data } = user;
  return data;
};

const create = async (newUserInfo) => {
 const isValid = validateNewUserInfo(newUserInfo);
 if (!isValid) return { error: { status: 409, message: 'Name or email already registered' } };
 const { name, email, password } = newUserInfo;
 await User.create({ name, email, password: md5(password), role: 'customer' });
 return { name, email, role: 'customer' };
};

module.exports = { findByEmail, findByName, create };