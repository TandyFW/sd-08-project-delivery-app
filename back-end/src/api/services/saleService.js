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

module.exports = {
  getSaleProducts,
  updateSaleStatus,
};
