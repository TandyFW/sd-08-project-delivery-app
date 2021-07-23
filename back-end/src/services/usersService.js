const { user } = require('../database/models');

const createUsers = async (dataForCreate) => {
  const result = await user.create(dataForCreate);
  console.log(result);
};

const getAllUsers = async () => {
  const users = await user.findAll();
  return users;
};

getAllUsers().then(console.log);

module.exports = {
  createUsers,
};