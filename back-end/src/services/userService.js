const { user } = require('../database/models');
const md5 = require('md5');

const findUserByEmail = async (email) => {
	const userByEmail = await user.findOne({ where: { email } });
	return userByEmail;
};

const loginUser = async ({ email, password }) => {
  const userFields = await user.findOne({ where: { email, password: md5(password) } });

  if(!userFields)
    throw new Error('Usuário não encontrado!')
	return userFields;
}

module.exports = {
  findUserByEmail,
  loginUser,
};