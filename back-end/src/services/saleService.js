const fs = require('fs');
const jwt = require('jsonwebtoken');
const { Sale, SalesProduct, User } = require('../database/models');

const status = {
  pendente: 'Pendente',
  preparando: 'Preparando',
  emTransito: 'Em Trânsito',
  entregue: 'Entregue',
};

const idUser = async (token) => {
  const JWT_SECRET = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();
  const decoded = jwt.verify(token, JWT_SECRET);
  const {
    data: { email },
  } = decoded;
  const { id } = await User.findOne({ where: { email } });
  return id;
};

const registerSaleProducts = async (products, saleId) => {
  const productSale = products.map(({ id, quantity }) => ({
    saleId,
    id,
    quantity,
  }));
  await SalesProduct.bulkCreate(productSale);
  return true;
};

const registerSale = async (saleDetails, token) => {
  const { products, sellerId, deliveryAddress, deliveryNumber, totalPrice } = saleDetails;
  const userId = await idUser(token);
  const saleDate = new Date();
  const resultSale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status: status.pendente,
  });
  await registerSaleProducts(products, resultSale.id);
  return { id: resultSale.id };
};

module.exports = {
  registerSale,
};
