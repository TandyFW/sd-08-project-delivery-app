const boom = require('@hapi/boom');
const { Sale, User, Product } = require('../database/models');
const SaleSchema = require('../schemas/sale');

const getAllSales = async () => Sale.findAll();

const findByEmail = async (email) => User.findOne({ where: { email } });

const findById = (id) => Product.findOne({ where: { id }});

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

const insertSalesProducts = async (instance) => {
  cart.forEach(async (element) => {
    const prod = await findById(element.id);
    console.log(element.quantity);
    await instance.addProduct(prod, { through: { quantity: 1 }});
  });
}


const createSale = async (saleData) => {
  const { error } = SaleSchema.validate(saleData);
  if (error) throw error;
  
  const { email, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleData;
  const { id } = await findByEmail(email);

  try{
    const newSale = await Sale.create(teste);
    insertSalesProducts(newSale);
    return newSale;
  } catch(err) {
    console.log(err);
  }
};

module.exports = { getAllSales, createSale };