const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const { sales } = require('../database/models');
const HandleError = require('../utils/handleError');

exports.findOrderSeller = async ({ id, role }) => {
  if (!['seller'].includes(role)) {
  throw new HandleError(
    'Run access prohibited.',
    StatusCodes.FORBIDDEN,
    getReasonPhrase(StatusCodes.FORBIDDEN),
    ); 
}
  const custumerSales = await sales.findAndCountAll({
      where: { sellerId: id },
      attributes: ['id', 'salesDate', 'status', 'totalPrice', 'deliveryAddress'],
    });
  if (!custumerSales.count) {
    return [];
  }
  return custumerSales.rows;
};
