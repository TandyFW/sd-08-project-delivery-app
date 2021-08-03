const { Sales, User, SalesProducts, Products } = require('../database/models');

const getUserOrders = async (userId) => {
  const userOrders = await Sales.findAll({ where: { userId } });
  return userOrders;
};

const getOrderById = async (id) => {
  const order = await Sales.findByPk(id, { include: [
    { model: User, as: 'seller', attributes: { exclude: ['password'] } },
  ] });

  return order;

  // const products = await SalesProducts.findAll({
  //   where: { saleId: id },
  // });
  // return products;
};

module.exports = { getUserOrders, getOrderById };