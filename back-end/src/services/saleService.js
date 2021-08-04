const { sale } = require('../database/models');

const createSale = async ({ totalPrice, deliveryAddress, deliveryNumber, userId, sellerId }) => {
const saleCreated = await sale.create({
totalPrice,
deliveryAddress,
deliveryNumber,
userId,
sellerId,
status: 'Pendente',
});
return saleCreated;
};

module.exports = { createSale };
