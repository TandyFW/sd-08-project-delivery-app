const SalesServices = require('../services/sales');

const getAllSales = async (req, res) => {
  const response = await SalesServices.getAllSales();
  res.status(200).json({ response });
};

const addNewSale = async (req, res) => {
  const { body, user } = req;
  const response = await SalesServices.addNewSale(body, user);
  if (response.error) {
    return res.status(500).json({ message: response.error });
  }
  res.status(201).json({ response });
};

module.exports = {
  getAllSales,
  addNewSale,
};
