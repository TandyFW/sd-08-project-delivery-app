// Sales service - criação pelos atributos 'saleId', 'productId' e 'quantity'
// da relação entre as tabelas 'sales' e 'products' na joinTable 'salesProducts'.

const { salesProduct } = require('../../../database/models');

module.exports = async ({ saleId, products }) => {
  const result = await salesProduct.bulkCreate(
    products.map((product) => ({ saleId, productId: product.id, quantity: product.quantity })),
  );

  return result;
};
