const { sale } = require('../database/models');

const getAllOrdersByCustomer = async (id) => {
  const ordersCustomer = await sale.findOne({ where: { UserId: id } });
  return ordersCustomer;
};

module.exports = {
  getAllOrdersByCustomer,
};
