const { sale } = require('../../database/models');

module.exports = async (id) => {
  const result = await sale.findAll({
    where: { userId: id },
  });

  return result;
};
