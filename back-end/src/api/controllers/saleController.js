const { saleService } = require('../services');
const tcw = require('../utils').tryCatchWrapper;

const createNewSale = tcw(async (req, res, _next) => {
  const { body, user } = req;
  const sale = { ...body, userId: user.dataValues.id };
  const { result } = await saleService.newSale(sale);
  res.status(201).json(result);
});

module.exports = {
  createNewSale,
};