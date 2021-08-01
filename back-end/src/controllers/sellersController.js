const sellersService = require('../services/sellersService');

const getAllSellers = async (_req, res) => {
  const allSellers = await sellersService.findAllSellers();
  return res.status(200).json(allSellers);
};

module.exports = {
  getAllSellers,
};

// const sellersUseCase = require('../services/sellersUseCase');

// exports.findAll = async (req, res) => {
//   const { user } = req.user;
//     try {
//       const sellers = await sellersUseCase.findOrderSeller(user);
//       res.status(200).json(sellers);
//     } catch (error) {
//       return res.status(error.statusCode).json(error.responseError());
//     };
// };
