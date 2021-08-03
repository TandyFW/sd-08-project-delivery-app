const ordersService = require('../services/ordersService');
const { status } = require('../middlewares/status');
const { validateToken } = require('../auth/jwt');

const getAllOrdersByCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ordersService.getAllOrdersByCustomer(id);
    res.status(status.OK).json(({ validateToken, result }));
  } catch (error) {
    return res.status(status.NotFound).json({ message: error.message });
  }
};

module.exports = {
  getAllOrdersByCustomer,
};