const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const { sales, products } = require('../database/models');
const HandleError = require('../utils/handleError');

const findOrderCustomer = async ({ id }) => {
  const custumerSales = await sales.findAndCountAll({
      where: { userId: id },
      attributes: ['id', 'salesDate', 'status', 'totalPrice'],
    });
  if (!custumerSales.count) {
    throw new HandleError(
      'Not found', StatusCodes.NOT_FOUND,
      getReasonPhrase(StatusCodes.NOT_FOUND),
    );
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
