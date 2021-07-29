const { Sale, SalesProduct, User } = require('../database/models');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const status = {
  pendente: 'Pendente',
  preparando: 'Preparando',
  emTransito: 'Em Trânsito',
  entregue: 'Entregue',
}

const idUser = async (token) => {
  const JWT_SECRET = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();
  const decoded = jwt.verify(token, JWT_SECRET);
  const {
    data: { email },
  } = decoded;
  const { id } = await User.findOne({ where: { email }});
  return id;
}

const registerSaleProducts = async (products, saleId) => {
  const productSale = products.map(({ id, quantity }) => ({ sale_id: saleId, product_id: id, quantity }));
  const result = await SalesProduct.bulkCreate(productSale);
  return true;
}

const formatDate = () => {
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR');
  return date;
};

const registerSale = async (saleDetails, token) => {
  const { products, seller_id, delivery_address, delivery_number, total_price } = saleDetails;
  const id = await idUser(token);
  const resultSale = await Sale.create({
    user_id: id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    sales_date: new Date(),
    status: status.pendente,
  });
  console.log(resultSale);
  await registerSaleProducts(products, resultSale.id);
  return { id: resultSale.id };
}

module.exports = {
  registerSale,
}