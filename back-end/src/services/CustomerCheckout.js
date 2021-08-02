const { User, Sales, SalesProducts } = require('../database/models');

const getAllSeller = async () => {
  const seller = await User.findAll({ where: { role: 'seller' } });
  return seller;
};

const createSale = async (saleData) => {
  const { name, seller, total, address, number, cart } = saleData;
  const idUser = await User.findOne({ where: { name } });
    const createSell = await Sales.create({
      userId: idUser.id,
      sellerId: seller,
      totalPrice: total,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'Pendente',
      saleDate: new Date(),
    });
    await SalesProducts.bulkCreate(cart.map((item) => ({
      saleId: createSell.id,
      productId: item.id,
      quantity: item.quantity,
    })));
    return createSell;
};

module.exports = { getAllSeller, createSale };
