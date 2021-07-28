const { sales } = require('../database/models');

// totalPrice, deliveryAddress, deliveryNumber, salesDate, status
const createSale = async (data) => {
  const { dataValues } = await sales.create(data);
  return dataValues;
};

module.exports = {
  createSale,
};
