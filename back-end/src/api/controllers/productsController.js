const { getAllProducts, getProductById } = require('../services');

const getAll = async (req, res) => {
  const result = await getAllProducts();

  return res.status(200).json({ products: result });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await getProductById(id);

  return res.status(200).json({ products: result });
};

module.exports = { getAll, getById };
