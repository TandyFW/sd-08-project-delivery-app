// Users service - leitura de todos os usuários 'customer' e 'seller' na tabela 'users'.

const { Op } = require('sequelize');
const { user } = require('../../../database/models');

module.exports = async () => {
  const result = await user.findAll({
    where: {
      [Op.or]: [
        { role: 'seller' },
        { role: 'customer' },
      ],
    },
    order: ['id'],
  });

  return result;
};
