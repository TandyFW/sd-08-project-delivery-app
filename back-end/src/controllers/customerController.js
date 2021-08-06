const customerService = require('../services/customerService');
const { status } = require('../middlewares/status');

const getAllOrdersByCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await customerService.getAllOrdersByCustomer(id);
    res.status(status.OK).json((result));
  } catch (error) {
    return res.status(status.NotFound).json({ message: error.message });
  }
};

module.exports = {
  getAllOrdersByCustomer,
};
