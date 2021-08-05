// Sales service - leitura de todas as vendas de um usuário pelos atributos 'id' e 'role'
// com as informações apenas da tabela 'sales'.

const { Op } = require('sequelize');
const { sale } = require('../../../database/models');

module.exports = async (id, role) => {
  let userId = '';
  let sellerId = '';

  if (role === 'customer') userId = id;
  if (role === 'seller') sellerId = id;

  const result = await sale.findAll({
    where: { [Op.or]: [
      { sellerId },
      { userId },
    ] },
  });

  return result;
};
