const sellerService = require('../services/sellerService');

const findSellers = async (req, res) => {
  const { statusCode, json } = await sellerService.findSellers();
  res.status(statusCode).json(json);
};

module.exports = findSellers;
