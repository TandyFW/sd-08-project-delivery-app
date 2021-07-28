const { getAll, create } = require('../services/saleService');
const { OK, CREATED } = require('../services/statusCode');

const getAllSales = async (req, res) => {
  const sales = await getAll();
  return res.status(OK).json(sales);
};

const createSales = async (req, res) => {
  const saleCreated = await create(req.body);
  res.status(CREATED).json(saleCreated);
};

module.exports = {
  getAllSales,
  createSales,
};
