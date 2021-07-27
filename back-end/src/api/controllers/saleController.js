const { getAll } = require('../services/saleService');
const { OK } = require('../services/statusCode');

const getAllSales = async (req, res) => {
  const sales = await getAll();
  return res.status(OK).json(sales);
};

module.exports = {
  getAllSales,
};
