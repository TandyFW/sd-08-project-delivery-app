const md5 = require('md5');
const { user } = require('../database/models');

const registerUser = async ({ name, email, password, role }) => {
const newUser = { name, email, password: md5(password), role };
const createUser = await user.create(newUser);
return createUser;
};

const findUserByEmail = async (email) => {
const userByEmail = await user.findOne({ where: { email } });
return userByEmail;
};

const findUserByName = async (name) => {
const userByName = await user.findOne({ where: { name } });
return userByName;
};

const loginUser = async ({ email, password }) => {
  const userFields = await user.findOne({ where: { email, password: md5(password) } });

if (!userFields) {
  throw new Error('Usuário não encontrado!');
}
return userFields;
};

const findSellers = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' } });
  return sellers;
};

module.exports = {
registerUser,
findUserByEmail,
findUserByName,
loginUser,
findSellers,
};
