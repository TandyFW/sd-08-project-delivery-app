const { sales } = require('../database/models');
const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const HandleError = require('../utils/handleError');

exports.findOrderCustomer = async ({ id }) => {
  const custumerSales = await sales.findAndCountAll({
      where: { userId: id },
      attributes: ['id', 'salesDate', 'status', 'totalPrice']
    });
  if (!custumerSales.count) {
    throw new HandleError(
      'Not found', StatusCodes.NOT_FOUND,
      getReasonPhrase(StatusCodes.NOT_FOUND),
    );
  }
  return custumerSales.rows;
};
