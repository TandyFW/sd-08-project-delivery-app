const saleService = require('../services/saleService');
const { status } = require('../middlewares/status');

const postSale = async (req, res) => {
	try {
	const { price, address, addressNumber, status } = req.body;
	const createdSale = await saleService.createSale({
		price, address, addressNumber
	});
	return res.status(status.Created).json(createdSale);
	} catch (error) {
		return res.status(status.Conflict).json({ message: error.message });
	}
};

module.exports = { postSale };
