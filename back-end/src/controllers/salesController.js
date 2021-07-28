const salesService = require('../services/salesService');

const postSale = async (req, res) => {
  const { body } = req;
  const newSale = await salesService.createSale(body);
  return res.status(201).json(newSale);
};

module.exports = {
  postSale,
};
