const customersUseCase = require('../services/customersUseCase');

exports.findAll = async (req, res) => {
  const { user: { id } } = req.user
    try {
      const customers = await customersUseCase.findOrderCustomer({ id });
      res.status(200).json(customers);
    } catch (error) {
      return res.status(error.statusCode).json(error.responseError());
    }
};
