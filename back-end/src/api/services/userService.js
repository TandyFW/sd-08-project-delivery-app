const md5 = require('md5');
const { User } = require('../../database/models');

const isValidUser = async ({ name, email }) => {
  const user = await User.findOne({ where: {
    email,
    name } });
    return user;
};

const validateLogin = async (loginObj) => {
  // Se possível substituir pela função validUser
  const validUser = await User.findOne({ where: { email: loginObj.email } });
  if (!validUser) return { error: { code: 'notFound', message: 'Usuário não encontrado' } };

  return { result: validUser };
};

const registerByAdmin = async ({ name, email, password, role }) => {
  const hash = md5(password);
  const createdUser = await User.create({ name, email, hash, role });
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
