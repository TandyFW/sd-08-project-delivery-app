const moment = require('moment');
const { Sale } = require('../../database/models');

const getSaleProducts = async (saleId) => {
  const saleWithProducts = await Sale.findOne({
    where: {
      id: saleId,
    },
    include: 'products',
  });
  if (!saleWithProducts) {
    return { error: { code: 'notFound', message: 'Ordem não encontrada' } };
  }
  return { result: saleWithProducts };
};

const updateSaleStatus = async (id, updateObj) => {
  const [affectedRows] = await Sale.update(updateObj, { where: { id } });
  if (affectedRows < 1) {
    return { error: { code: 'notFound', message: 'Ordem não encontrada' } };
  }
  return { result: 'Updated!' };
}; 

const newSale = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, productsList } = sale;
  const newSaleResult = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: moment().toISOString(),
    status: 'Pendente',
    productsList,
  });
  return { result: newSaleResult };
};

module.exports = {
  getSaleProducts,
  updateSaleStatus,
  newSale,
};
