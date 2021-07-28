const { sale } = require('../../database/models');

module.exports = async (id) => {
  const result = await sale.findAll({
    // eslint-disable-next-line camelcase
    where: { seller_id: id },
  });

  return result;
};
