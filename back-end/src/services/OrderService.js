const { Sales, User, Products } = require('../database/models');

const getUserOrders = async (userId) => {
  const userOrders = await Sales.findAll({ where: { userId } });
  return userOrders;
};

const getOrderById = async (id) => {
  const order = await Sales.findByPk(id, { include: [
    { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    { model: Products, as: 'products', through: { attributes: ['quantity'] } },
  ] });

  return order;
};

module.exports = { getUserOrders, getOrderById };