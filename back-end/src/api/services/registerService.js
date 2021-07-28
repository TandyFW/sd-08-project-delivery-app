const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../../database/models');
const { getJwtSecret } = require('../utils');

const isValidUser = async ({ name, email }) => {
  const user = await User.findOne({ where: {
    [Op.or]: [
      { name },
      { email },
    ] } });
    return user;
};

const validateLogin = async (loginObj) => {
  const validUser = await User.findOne({ where: { email: loginObj.email } });
  if (!validUser) return { error: { code: 'notFound', message: 'Usuário não encontrado' } };

  return { result: validUser };
};

const registerUser = async ({ name, email, password, role }) => {
  const hash = md5(password);
  const createdUser = await User.create({ name, email, password: hash, role });

  const secret = await getJwtSecret();
  const token = jwt.sign({ data: createdUser.dataValues }, secret.trim());

  createdUser.token = token;
  return createdUser;
};

const validateRegister = async (registerObj) => {
  const user = await isValidUser(registerObj);
  if (user) return { error: { code: 'alreadyExists', message: 'Usuário já possui um cadastro' } };
  const createdUser = await registerUser(registerObj); 
  return { result: createdUser };
};

module.exports = {
  validateLogin,
  validateRegister,
};
