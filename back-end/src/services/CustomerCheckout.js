const { User, Sales } = require('../database/models');

const getAllSeller = async () => {
  const seller = await User.findAll({ where: { role: 'seller' } });
  return seller;
};

const createSale = async (name, seller, address, number) => {
  const idUser = await User.findOne({ where: { name } });
  const idSeller = await User.findOne({ where: { name: seller } });
  
  const createSell = await Sales.create({
    user_id: idUser.id,
    seller_id: idSeller.id,
    delivery_address: address,
    delivery_number: number,
    status: 'PENDENTE',
    sale_date: new Date(),
    updated: new Date(),
  })
  return createSell;
}

module.exports = { getAllSeller, createSale };
