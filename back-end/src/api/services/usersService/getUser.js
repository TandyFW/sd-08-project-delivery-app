// Users service - leitura de um usuários específico pelo 'name' ou 'email' na tabela 'users'.

const { Op } = require('sequelize');
const { user } = require('../../../database/models');

module.exports = async (email, name) => {
  const userName = (name) || '';
  const result = await user.findOne({
    where: { [Op.or]: [
      { name: userName },
      { email },
    ] },
  });

  return result;
};
