const { Op } = require('sequelize');
const { sale } = require('../../database/models');

module.exports = async (id, role, saleId) => {
  let userId = '';
  let sellerId = '';

  if (role === 'customer') userId = id;
  if (role === 'seller') sellerId = id;

  const result = await sale.findAll({
    where: { [Op.and]: [
        { id: saleId },
        { [Op.or]: [{ sellerId }, { userId }] }] },
  });

  return result;
};
