const { salesProduct } = require('../../database/models');

module.exports = async ({
  saleId,
  productId,
  quantity,
}) => {
  const result = await salesProduct.create({
    saleId,
    productId,
    quantity });

  return result;
};
