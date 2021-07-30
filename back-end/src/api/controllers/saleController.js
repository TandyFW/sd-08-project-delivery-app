const { saleService } = require('../services');
const tcw = require('../utils').tryCatchWrapper;

const createNewSale = tcw(async (req, res, _next) => {
  const { body, user } = req;
  body.userId = user.dataValues.id;
  const { result } = await saleService.newSale(body);
  res.status(201).json(result);
});

module.exports = {
  createNewSale,
};