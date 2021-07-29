const { product } = require('../../database/models');

module.exports = async () => {
  const result = await product.findAll({
  });

  return result;
};
