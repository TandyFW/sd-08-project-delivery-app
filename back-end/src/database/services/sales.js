const { sale } = require('../models')

// const mockResponse = [{
//   id: 1,
//   user_id: 1,
//   seller_id: 1,
//   total_price: 10.00,
//   delivery_address: 'rua jorge',
//   delivery_number: '200',
//   sale_date: '26/07/21',
//   status: 'Preparando',
// }, {
//   id: 2,
//   user_id: 2,
//   seller_id: 1,
//   total_price: 15.00,
//   delivery_address: 'rua esparta',
//   delivery_number: '300',
//   sale_date: '30/03/21',
//   status: 'Entregue',
// }, {
//   id: 3,
//   user_id: 3,
//   seller_id: 2,
//   total_price: 5.00,
//   delivery_address: 'rua atenas',
//   delivery_number: '2004',
//   sale_date: '20/04/21',
//   status: 'Pendente',
// }]

const getAllSales = async () => {
  const response = await sale.findAll();
  return response;
};

module.exports = {
  getAllSales,
}
