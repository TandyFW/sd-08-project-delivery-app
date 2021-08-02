const { Sales } = require('../database/models');

const getUserOrders = async (userId) => {
  const userOrders = await Sales.findAll({ where: { userId } })
  return userOrders;
};

module.exports = { getUserOrders };