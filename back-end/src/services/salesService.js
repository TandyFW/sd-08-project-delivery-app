const jwt = require('jsonwebtoken');
const { sales, salesProducts } = require('../database/models');
const { SECRET } = require('../../config/jwtConfig');

const format = (data) => {
  const {
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  } = data;

  return {
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    status,
  };
};

const createSale = async (token, data) => {
  const { user: { id: user_id } } = jwt.verify(token, SECRET);
  const { productList, ...saleData } = data;
  const { dataValues } = await sales.create({ user_id, ...format(saleData) });

  const sale_id = dataValues.id;

  productList.forEach(async (product) => {
    const { id, quantity } = product;
    const saleProductData = { sale_id, product_id: id, quantity };
    await salesProducts.create(saleProductData);
  });

  return { ...dataValues, productList };
};

module.exports = {
  createSale,
};
