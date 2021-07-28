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

const validateLogin = async ({ email, password }) => {
  // Se possível substituir pela função isvalidUser
  const validUser = await User.findOne({ where: { email } });
  if (!validUser) return { error: { code: 'notFound', message: 'Usuário não encontrado' } };

  if (validUser.dataValues.password !== md5(password)) {
    return { error: { code: 'notFound', message: 'Senha inválida' } };
  }

  const secret = await getJwtSecret();
  const token = jwt.sign({ data: validUser.dataValues },
    secret, { issuer: 'delivery-app', subject: 'login' });

  return { result: { token } };
};

const registerByAdmin = async ({ name, email, password, role }) => {
  const hash = md5(password);
  const createdUser = await User.create({ name, email, password: hash, role });
  return createdUser;
};

const validateRegister = async (registerObj) => {
  const user = await isValidUser(registerObj);
  if (user) return { error: { code: 'alreadyExists', message: 'Usuário já possui um cadastro' } };
  const createdUser = await registerByAdmin(registerObj); 
  return { result: createdUser };
};

module.exports = {
  validateLogin,
  validateRegister,
};
