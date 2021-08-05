const rescue = require('express-rescue');
const SellerService = require('../services/seller');

const getAllSellers = rescue(async (req, res) => {
  const result = await SellerService.getAllSellers();
  res.status(200).json(result);
});

module.exports = getAllSellers;