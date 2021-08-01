const { userService } = require('../services');
const tcw = require('../utils').tryCatchWrapper;

const getAllSellers = tcw(async (_req, res, _next) => {
  const { result } = await userService.getAllSellers();
  res.status(200).json(result);
});

module.exports = {
  getAllSellers,
};