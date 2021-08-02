const jwt = require('jsonwebtoken');
const { sales, salesProducts } = require('../database/models');
const { SECRET } = require('../../config/jwtConfig');

const createSale = async (token, data) => {
  const { user: { id: userId } } = jwt.verify(token, SECRET);
  const { productList, ...saleData } = data;
  const { dataValues } = await sales.create({ userId, ...saleData });

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
