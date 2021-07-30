const boom = require('@hapi/boom');
const { Sale, User, Product, SalesProducts } = require('../database/models');
const { strict } = require('../schemas/sale');
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
  totalPrice: 10,
  deliveryAddress: 'Rua X',
  deliveryNumber: '99',
  status: 'Pendente',
}

const insertSalesProducts = async (id, data) => {
  // cart.forEach(async (element) => {
  //   const prod = await findById(element.id);
  //   console.log(element.quantity);
  //   await instance.addProduct(prod, { through: { quantity: 1 }});
  // });
  data.forEach(async (element) => {
    await SalesProducts.create({
      saleId: id,
      productId: element.id,
      quantity: element.quantity,
    });
  });
}

const calculate = async (data) => {
  let count = 0;

  for(let i = 0; i < data.length; i+=1) {
    const item = await findById(data[i].id);
    count += item.price * data[i].quantity;
  }
  return count; 
}


const createSale = async (saleData) => {
  const { error } = SaleSchema.validate(saleData);
  if (error) throw error;
  
  const { email, sellerId, cart, deliveryAddress, deliveryNumber } = saleData;
  const { id } = await findByEmail(email);
  
  const value = await calculate(cart);

  try{
    const newSale = await Sale.create({
      userId: id,
      sellerId,
      totalPrice: value,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
    });
    insertSalesProducts(newSale.id, cart);

    return newSale;
  } catch(err) {
    console.log(err);
  }
};

const updateSale = async ({ id, status }) => {
  
  console.log(id, status);
  try{
    await Sale.update({ status }, {
      where: { id }
    })
    const response = await Sale.findOne({ where: { id }});
    return response;
  } catch(err) {
    console.log(err);
  }
}

module.exports = { getAllSales, createSale, updateSale };