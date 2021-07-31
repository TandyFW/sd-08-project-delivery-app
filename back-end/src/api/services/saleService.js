const moment = require('moment');
const { Sale } = require('../../database/models');

const newSale = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;
  const newSaleResult = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: moment().toISOString(),
    status: 'Pendente',
  });
  return { result: newSaleResult };
};

module.exports = {
  newSale,
};