const SalesServices = require('../services/sales')

const getAllSales = async (req, res) => {
  const response = await SalesServices.getAllSales();
  res.status(200).json({ response });
};

module.exports = {
  getAllSales,
}
