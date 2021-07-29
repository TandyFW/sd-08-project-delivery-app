const tcw = require('../utils').tryCatchWrapper;
const { transactionService } = require('../services');

const requestTransactions = (transactionSide) => tcw(async (req, res, next) => {
  const { encodedName } = req.params;
  const name = decodeURI(encodedName);
  const { result, error } = await transactionService.findTransactions(name, transactionSide);
  if (error) return next(error);
  res.status(200).json(result);
});

const requestAllSales = tcw(async (req, res, next) => {
  const { result, error } = await transactionService.findAllSales();
  if (error) return next(error);
  res.status(200).json(result);
});

module.exports = {
  requestTransactions,
  requestAllSales,
};