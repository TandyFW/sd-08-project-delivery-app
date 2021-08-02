const salesService = require('../services/salesService');

const postSale = async (req, res) => {
  const { body } = req;
  const token = req.headers.authorization;
  const newSale = await salesService.createSale(token, body);
  return res.status(201).json(newSale);
};

module.exports = {
  postSale,
};
