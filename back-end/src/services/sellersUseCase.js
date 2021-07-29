const { sales } = require('../database/models');

exports.findOrderSeller = async ({ id }) => {
  const sellerSales = await sales.findAndCountAll({
      where: { sellerId: id },
      attributes: ['id', 'salesDate', 'status', 'totalPrice', 'deliveryAddress'],
    });
  if (!sellerSales.count) {
    return [];
  }
  return sellerSales.rows;
};
