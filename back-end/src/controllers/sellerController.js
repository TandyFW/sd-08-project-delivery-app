const sellerService = require('../services/sellerService');
const { status } = require('../middlewares/status');

const getAllOrdersBySeller = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sellerService.getAllOrdersBySeller(id);
    res.status(status.OK).json((result));
  } catch (error) {
    return res.status(status.NotFound).json({ message: error.message });
  }
};

module.exports = {
  getAllOrdersBySeller,
};