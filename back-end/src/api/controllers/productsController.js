const { product } = require('../../database/models');

const getAllProducts = async (req, res) => {
  const result = await product.findAll({
  attributes: ['id', 'name', 'price', 'url_image'],
});

  return res.status(200).json({ products: result });
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const result = await product.findOne({
    attributes: ['id', 'name', 'price', 'url_image'],
    where: { id },
  });

  return res.status(200).json({ products: result });
};

module.exports = { getAllProducts, getProductById };
