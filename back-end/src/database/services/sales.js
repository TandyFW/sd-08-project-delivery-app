const { sale } = require('../models')

const getAllSales = async () => {
  const response = await sale.findAll();
  return response;
};

const addNewSale = async (body, user) => {
  const saleData = {
    seller_id: body.sellerId,
    total_price: body.totalPrice,
    delivery_address: body.deliveryAddress,
    delivery_number: body.deliveryNumber,
    status: body.status,
    user_id: user.id,
    sale_date: new Date(),
  }
  try {
    const response = await sale.create(saleData);
    return response
  } catch (err) {
    return { error: 'Internal error' };
  }
}

module.exports = {
  getAllSales,
  addNewSale,
}
