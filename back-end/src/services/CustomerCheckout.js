const { User, Sales, SalesProducts } = require('../database/models');

const getAllSeller = async () => {
  const seller = await User.findAll({ where: { role: 'seller' } });
  return seller;
};

const createSale = async (saleData) => {
  const { name, seller, total, address, number, cart } = saleData;
  const idUser = await User.findOne({ where: { name } });
  
  const createSell = await Sales.create({
    user_id: idUser.id,
    seller_id: seller,
    total_price: total,
    delivery_address: address,
    delivery_number: number,
    status: 'Pendente',
    sale_date: new Date(),
  });

  await SalesProducts.bulkCreate(cart.map((item) => ({
    sale_id: createSell.id,
    product_id: item.id,
    quantity: item.quantity,
  })));

  return createSell;
};

module.exports = { getAllSeller, createSale };
