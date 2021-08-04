const { sales } = require('../database/models');
const { users } = require('../database/models');

const getIdAndName = ({ id, name }) => ({ id, name }); 
const getManyIdsAndNames = (sellers) => sellers.map(getIdAndName);

// FAZER TRATAMENTO DE ERRO
const findAllSellers = async () => {
  const allSellers = await users.findAll({ where: { role: 'seller' } });
  const sellers = getManyIdsAndNames(allSellers);
  return sellers;
};

const findOrderSeller = async ({ id }) => {
  const sellerSales = await sales.findAndCountAll({
      where: { sellerId: id },
      attributes: ['id', 'saleDate', 'status', 'totalPrice', 'deliveryAddress'],
    });
  if (!sellerSales.count) {
    return [];
  }
  return sellerSales.rows;
};

module.exports = {
  findAllSellers,
  findOrderSeller,
};
