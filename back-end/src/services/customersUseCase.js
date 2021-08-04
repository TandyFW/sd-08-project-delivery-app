const { sales, products } = require('../database/models');

const findOrderCustomer = async ({ id }) => {
  const custumerSales = await sales.findAndCountAll({
      where: { userId: id },
      attributes: ['id', 'saleDate', 'status', 'totalPrice'],
    });
  if (!custumerSales.count) {
    return [];
  }
  return custumerSales.rows;
};

const getAllProducts = async () => {
  const allProducts = await products.findAll();
  return allProducts;
};

module.exports = {
  findOrderCustomer,
  getAllProducts,
};
