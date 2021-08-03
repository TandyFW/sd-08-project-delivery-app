const { sale } = require('../database/models');

const createSale = async (price, address, addressNumber, status = 'PENDENTE') => {
	const saleCreated = await sale.create({ 
		price,
		address,
		addressNumber,
		status,
	 });
	 return saleCreated;
};

module.exports = { createSale };
