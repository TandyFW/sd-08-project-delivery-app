// Users service - registro de um usuários com os atributos 'name', 'email', 'password' e 'role' na tabela 'users'.

const { user } = require('../../../database/models');

module.exports = async (name, email, password, role) => {
  const result = await user.create({ name, email, password, role });

  return result;
};
