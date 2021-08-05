// Users service - leitura de todos os usuários específico pelo atributo 'role' na tabela 'users'.

const { user } = require('../../../database/models');

module.exports = async (role) => {
  const result = await user.findAll({ where: { role } });

  return result;
};
