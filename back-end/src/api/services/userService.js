const md5 = require('md5');
const { user } = require('../../database/models');

const createUser = async ({ name, email, password, role }) => {
  let roleUser = role;
  if (roleUser === undefined) {
    roleUser = 'customer';
  }
  try {
    const newUser = { name, email, password: md5(password), role: roleUser };
    const registredUser = await user.create(newUser);
    return registredUser;
  } catch (error) {
    return error.message;
  }
};

const getUsers = async () => {
  try {
    const users = await user.findAll();
    return users;
  } catch (error) {
    return error.message;
  }
};

const userLogin = async (email, password) => {
  const findUser = await user.findOne({ where: { email } });
  if (!findUser || findUser.password !== md5(password)) throw new Error('Not found');
  if (!findUser) throw new Error('Not found');
  return findUser;
};

const getSellers = async () => user.findAll({ where: { role: 'seller' } });

const getUserByName = async (name) => user.findOne({ where: { name } });

const getUserByEmail = async (email) => user.findOne({ where: { email } });

const deleteUser = async (id) => user.destroy({ where: { id } });

module.exports = {
  userLogin,
  createUser,
  getUsers,
  getUserByName,
  getSellers,
  getUserByEmail,
  deleteUser,
};
