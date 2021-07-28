const { products } = require('../database/models');

const getAll = async (_req, res) => {
  try {
    const response = await products.findAll();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAll,
};