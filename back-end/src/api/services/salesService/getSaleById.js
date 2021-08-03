// Sales service - leitura de uma venda específica pelo atributo 'id'
// com as informações da tabela 'sales' associada a tabela 'products'.

const { sale, product, salesProduct } = require('../../../database/models');

module.exports = async (id) => {
  const result = await sale.findOne({
    where: { id },
    include: {
        model: salesProduct,
        attributes: ['quantity'],
        include: {
          model: product,
          atributes: ['name', 'price', 'url_image'],
        },
      },
  });

  return result;
};
