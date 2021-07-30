const sellersService = require('../services/sellersService');

const getAllSellers = async (_req, res) => {
  const allSellers = await sellersService.findAllSellers();
  return res.status(200).json(allSellers);
};

module.exports = {
  getAllSellers,
};
