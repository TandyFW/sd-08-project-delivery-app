const { sale } = require('../database/models');

const getAllOrdersBySeller = async (id) => {
  const sellerId = 'seller_id';
  const ordersCustomer = await sale.findAll({ where: { [sellerId]: id } });
  return ordersCustomer;
};

module.exports = {
  getAllOrdersBySeller,
};