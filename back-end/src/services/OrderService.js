const { Sales, User, Products, SalesProducts } = require('../database/models');

const getUserOrders = async (userId) => {
  const userOrders = await Sales.findAll({ where: { userId } });
  return userOrders;
};

const getOrderById = async (id) => {
  const order = await Sales.findByPk(id, { include: [
    { model: User, as: 'seller', attributes: ['name'] },
    { model: Products, as: 'products', through: { attributes: ['quantity'] } },
  ] });
  return order;
  // const products = await SalesProducts.findAll({
  //   where: { saleId: id },
  //   include: [
  //     { model: Products, as: 'products', through: { attributes: [] } },
  //   ],
  // });
  // return products;
};

module.exports = { getUserOrders, getOrderById };