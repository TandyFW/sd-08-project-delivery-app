const { sales, salesProducts } = require('../database/models');

const createSale = async (data) => {
  const { productList, ...saleData } = data;
  const { dataValues } = await sales.create(saleData);
  const saleId = dataValues.id;

  productList.forEach(async (product) => {
    const { id, quantity } = product;
    const saleProductData = { saleId, productId: id, quantity };
    await salesProducts.create(saleProductData);
  });

  return { ...dataValues, productList };
};

module.exports = {
  createSale,
};
