const ordersService = require('../services/ordersService');
const { status } = require('../middlewares/status');

const getAllOrdersByCustomer = async (req, res) => {
  try {
    const { id } = req.user.id;
    const result = await ordersService.getAllOrdersByCustomer(id);
    res.status(status.OK).json(({ result }));
  } catch (error) {
    return res.status(status.NotFound).json({ message: error.message });
  }
};

module.exports = {
  getAllOrdersByCustomer,
};
