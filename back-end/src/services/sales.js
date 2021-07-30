const boom = require('@hapi/boom');
const { Sale, User, Product, SalesProducts } = require('../database/models');
const SaleSchema = require('../schemas/sale');

const getAllSales = async () => Sale.findAll();

const findByEmail = async (email) => User.findOne({ where: { email } });

const findById = (id) => Product.findOne({ where: { id }});

const insertSalesProducts = async (id, data) => {
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