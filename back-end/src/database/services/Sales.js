const { sale } = require('../models')

const mockResponse = [{
  id: 1,
  user_id: 1,
  seller_id: 1,
  total_price: 10.00,
  delivery_address: 'rua jorge',
  delivery_number: '200',
  sale_date: '26/07/21',
  status: 'Preparando',
}]

const getAllSales = async (data) => {
  const response = await sale.findAll();
  return response;
};

module.exports = {
  getAllSales,
}
