const sellersUseCase = require('../services/sellersUseCase');

const getAllSellers = async (_req, res) => {
  const allSellers = await sellersUseCase.findAllSellers();
  return res.status(200).json(allSellers);
};

const findAll = async (req, res) => {
  const { user } = req.user;
    try {
      const sellers = await sellersUseCase.findOrderSeller(user);
      res.status(200).json(sellers);
    } catch (error) {
      return res.status(error.statusCode).json(error.responseError());
    };
  }

module.exports = {
  getAllSellers,
  findAll,
};
