const { sales, salesProducts } = require('../../database/models');
const { getUserByEmail } = require('./userService');

const getAll = async () => {
  try {
    const allSales = await sales.findAll();
    return allSales;
  } catch (error) {
    return error.message;
  }
};

const getAllSalesById = async (email) => {
  const { id } = await getUserByEmail(email);
  const sellerSales = await sales.findAll({ where: { sellerId: id } });
  return sellerSales;
};

const create = async (sale) => {
  try {
    const { products, sellerId, ...data } = sale;
    const newSale = await sales.create({ sellerId, ...data });
    products.forEach(({ qtd, id }) => salesProducts
      .create({ saleId: newSale.id, productId: id, quantity: qtd }));
    return newSale;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
  create,
  getAllSalesById,
};
