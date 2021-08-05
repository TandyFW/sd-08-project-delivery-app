const productsService = require('../services/productsService');
const { status } = require('../middlewares/status');

const getAllProducts = async (_req, res) => {
try {
const products = await productsService.getProducts();
return res.status(status.OK).json(products);
} catch (error) {
return res.status(status.NotFound).json({ message: 'Error' });
}
};

module.exports = { getAllProducts };
