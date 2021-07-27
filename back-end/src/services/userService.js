const { user } = require('../database/models');
const md5 = require('md5');

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

module.exports = {
	registerUser,
	findUserByEmail,
	findUserByName,
};
