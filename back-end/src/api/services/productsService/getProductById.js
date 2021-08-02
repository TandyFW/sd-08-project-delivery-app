const { product } = require('../../../database/models');

module.exports = async (id) => {
  const result = await product.findOne({
    where: { id },
  });

  return result;
};
