const { product } = require('../../database/models');

module.exports = async (id) => {
  const result = await product.findOne({
    attributes: ['id', 'name', 'price', 'url_image'],
    where: { id },
  });

  return result;
};
