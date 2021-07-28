const { status } = require('./status');
const userService = require('../services/userService');

const validateEmailExist = async (req, res, next) => {
const { email } = req.body;
const emailExists = await userService.findUserByEmail(email);
if (emailExists) {
	return res.status(status.Conflict).json({ message: 'Usuário já possui cadastro' });
}
next();
};

const validateNameExist = async (req, res, next) => {
const { name } = req.body;
const nameExists = await userService.findUserByName(name);
if (nameExists) {
	return res.status(status.Conflict).json({ message: 'Usuário já possui cadastro' });
}
next();
};

module.exports = {
validateEmailExist,
validateNameExist,
};
