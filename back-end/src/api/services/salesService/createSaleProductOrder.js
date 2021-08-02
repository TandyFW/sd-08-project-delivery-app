const { salesProduct } = require('../../../database/models');

module.exports = async ({ saleId, products }) => {
  const result = await salesProduct.bulkCreate(
    products.map((product) => ({ saleId, productId: product.id, quantity: product.quantity })),
  );

  return result;
};
