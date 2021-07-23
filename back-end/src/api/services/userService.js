const { User } = require('../../database/models');

const validateLogin = async (loginObj) => {
  const validUser = await User.findOne({ where: { email: loginObj.email } });
  if (!validUser) return { error: { code: 'notFound', message: 'Usuário não encontrado' } };

  return { result: validUser };
};

module.exports = {
  validateLogin,
};
