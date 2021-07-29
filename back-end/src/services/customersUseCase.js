const { sales } = require('../database/models');

exports.findOrderCustomer = async ({ id }) => {
  const custumerSales = await sales.findAndCountAll({
      where: { userId: id },
      attributes: ['id', 'salesDate', 'status', 'totalPrice'],
    });
  if (!custumerSales.count) {
    return [];
  }
  return custumerSales.rows;
};
