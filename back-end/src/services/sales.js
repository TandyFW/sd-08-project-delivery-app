const boom = require('@hapi/boom');
const { Sale, User, SalesProducts } = require('../database/models');
const SaleSchema = require('../schemas/sale');

const getAllSales = async () => Sale.findAll();

const findByEmail = async (email) => User.findOne({ where: { email } });

const teste = {
  email:'zebirita@email.com',
  sellerId: 2,
  totalPrice: 10.00,
  deliveryAddress: 'Rua X',
  deliveryNumber: '99'
}

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

const array = [];

const createSale = async (saleData) => {
  const { error } = SaleSchema.validate(saleData);
  if (error) throw error;
  
  const { email, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleData;
  const { id } = await findByEmail(email);

  try{
    const newSale = Sale.create({ 
      userId: id, 
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente' 
    });
    for(let i =0; i<cart.length; i+=1) {
      const saleProd = SalesProducts.create({
        saleId: 1,
        productId: cart[i].id,
        quantity: cart[i].quantity
      })
      array.push(saleProd);
    }
    return { newSale, array };
  } catch(err) {
    console.log(err);
  }
};

module.exports = { getAllSales, createSale };