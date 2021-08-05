// Products service - leitura de todos os produtos registrados na tabela 'products'.

const { product } = require('../../../database/models');

module.exports = async () => {
  const result = await product.findAll({
  });

  return result;
};
