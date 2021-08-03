// Products service - leitura de um produto especifico pelo atributo 'id' na tabela 'products'.

const { product } = require('../../../database/models');

module.exports = async (id) => {
  const result = await product.findOne({
    where: { id },
  });

  return result;
};
