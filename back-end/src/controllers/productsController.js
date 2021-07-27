const productsService = require('../services/customerProducts');

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  getAll,
}