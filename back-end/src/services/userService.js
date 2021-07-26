const md5 = require('md5');
const { conflict } = require('@hapi/boom');

const { User } = require('../database/models');
const { createUserValidation } = require('../schema/userSchema');
const { userExist } = require('../utils/user');

const create = async (name, email, password, role) => {
  createUserValidation(name, email, password, role);
  if (await userExist(email)) throw conflict('E-mail already exists');
  const passwordMd5 = md5(password);
  const { id } = await User.create({ name, email, password: passwordMd5, role });
  return { id, name, email, role };
};

module.exports = {
  create,
};
