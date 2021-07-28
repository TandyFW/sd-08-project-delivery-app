const customersUseCase = require('../services/customersUseCase');

const findAllOrders = async (req, res) => {
  const { user: { id } } = req.user;
    try {
      const customers = await customersUseCase.findOrderCustomer({ id });
      res.status(200).json(customers);
    } catch (error) {
      return res.status(error.statusCode).json(error.responseError());
    }
};

const getAllProducts = async (_req, res) => {
  try {
    const response = await customersUseCase.getAllProducts();
    res.status(200).json(response);
  } catch (error) {
    return res.status(error.statusCode).json(error.responseError());
  }
};

module.exports = {
  findAllOrders,
  getAllProducts,
};
