const sellersUseCase = require('../services/sellersUseCase');

exports.findAll = async (req, res) => {
  const { user } = req.user;
    try {
      const sellers = await sellersUseCase.findOrderSeller(user);
      res.status(200).json(sellers);
    } catch (error) {
      return res.status(error.statusCode).json(error.responseError());
    }
};
