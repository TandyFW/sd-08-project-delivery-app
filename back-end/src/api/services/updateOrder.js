const { sale } = require('../../database/models');
const getSaleById = require('./getSaleById');

module.exports = async (id, status) => {
  await sale.update({ status }, {
    where: { id },
  });

  const result = await getSaleById(id);

  return result;
};
