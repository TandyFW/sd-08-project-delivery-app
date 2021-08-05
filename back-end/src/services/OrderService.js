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

const updateOrderStatus = async (id, newStatusObj) => {
  const updatedOrder = await Sales.update(newStatusObj, { where: { id } });
  return updatedOrder;
};

module.exports = { getUserOrders, getOrderById, updateOrderStatus };