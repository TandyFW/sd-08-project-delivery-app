const md5 = require('md5');
const { Users } = require('../models');

const createUser = async ({name, email, password}) => {
  try {
    const registredUser = await Users.create({ name, email, password: md5(password) });
    return registredUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
};
