const { product } = require('../../database/models');

module.exports = async () => {
  const result = await product.findAll({
  attributes: ['id', 'name', 'price', 'url_image'],
  });

  return result;
};
