const { sale } = require('../database/models');

const getAllOrdersByCustomer = async (id) => {
  const customerId = 'user_id';
  const ordersCustomer = await sale.findAll({ where: { [customerId]: id } });
  return ordersCustomer;
};

module.exports = {
  getAllOrdersByCustomer,
};
