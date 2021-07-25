const md5 = require('md5');
const { Users } = require('../models');

const createUser = async ({name, email, password}) => {
  try {
    const registredUser = await Users
      .create({ name, email, password: md5(password), role: 'customer' });
    return registredUser;
  } catch (error) {
    return error.message;
  }
};

const getUsers = async () => {
  try {
    const users = await Users.findAll();
    return users;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
  getUsers,
};
