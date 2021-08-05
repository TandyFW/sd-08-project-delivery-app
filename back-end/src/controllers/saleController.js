const saleService = require('../services/saleService');
const userService = require('../services/userService');
const { status } = require('../middlewares/status');

const postSale = async (req, res) => {
try {
const { totalPrice, address, addressNumber, name, products } = req.body;
const [seller] = await userService.findSellers();
const { id: userId } = await userService.findUserByName(name);
const createdSale = await saleService.createSale({
totalPrice, 
deliveryAddress: address, 
deliveryNumber: addressNumber,
userId,
sellerId: seller.id,
products,
});
console.log('CREATED__SALE', createdSale);
return res.status(status.Created).json(createdSale);
} catch (error) {
console.log('x', error);
return res.status(status.Conflict).json({ message: error.message });
}
};

module.exports = { postSale };
