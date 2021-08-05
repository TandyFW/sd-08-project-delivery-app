// Sales service - leitura de uma venda especifica de um usuário  pelos atributos 'id', 'role' e 'saleId'
// com as informações da tabela 'sales' associada a tabela 'products'.

const { Op } = require('sequelize');
const { sale, product, salesProduct } = require('../../../database/models');

module.exports = async (id, role, saleId) => {
  let userId = '';
  let sellerId = '';

  if (role === 'customer') userId = id;
  if (role === 'seller') sellerId = id;

  const result = await sale.findAll({
    where: { [Op.and]: [
        { id: saleId },
      { [Op.or]: [{ sellerId }, { userId }] }],
    },
    include: { model: salesProduct,
        attributes: ['quantity'],
        include: { model: product,
          atributes: ['name', 'price', 'url_image'],
        },
      },
  });

  return result;
};
