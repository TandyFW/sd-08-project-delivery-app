const boom = require('@hapi/boom');
const { Sale } = require('../database/models');
const SaleSchema = require('../schemas/sale');

const getAllSales = async () => Sale.findAll();

const findByEmail = async (email) => User.findOne({ where: { email } });

const cart = [
  {
    id: 1,
    quantity: 2
  },
  {
    id: 2,
    quantity: 3
  }
]

const teste = {
  userId: 1,
  sellerId: 2,
  totalPrice: 10.00,
  deliveryAddress: 'Rua X',
  deliveryNumber: '99',
  status: 'Pendente'
}

const createSale = async (saleData) => {
  const { error } = SaleSchema.validate(saleData);
  if (error) throw error;
  
  const { email, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleData;
  const { id } = await findByEmail(email);

  try{
    const newSale = Sale.create(teste);
    return newSale;
  } catch(err) {
    console.log(err);
  }
};

module.exports = { getAllSales, createSale };