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

const generateObjSaleProducts = (saleId, id, quantity) => {
  const obj = {};
  const saleIdd = 'sale_id';
  const productId = 'product_id';
  obj[saleIdd] = saleId;
  obj[productId] = id;
  obj.quantity = quantity;
  return obj;
};

const registerSaleProducts = async (products, saleId) => {
  const productSale = products.map(({ id, quantity }) =>
    generateObjSaleProducts(saleId, id, quantity));
  await SalesProduct.bulkCreate(productSale);
  return true;
};

const mountObj = async (saleDetails, token) => {
  const { sellerId, deliveryAddress, deliveryNumber, totalPrice } = saleDetails;
  const userId = await idUser(token);
  const saleDate = new Date();
  const obj = {};
  const userIdd = 'user_id';
  const sellerIdd = 'seller_id';
  const totalP = 'total_price';
  const deliveryAdd = 'delivery_address';
  const deliveryNum = 'delivery_number';
  const saleD = 'sale_date';
  obj[userIdd] = userId;
  obj[sellerIdd] = sellerId;
  obj[totalP] = totalPrice;
  obj[deliveryAdd] = deliveryAddress;
  obj[deliveryNum] = deliveryNumber;
  obj[saleD] = saleDate;
  obj.status = status.pendente;
  return obj;
};
const registerSale = async (saleDetails, token) => {
  const { products } = saleDetails;
  const obj = await mountObj(saleDetails, token);
  const resultSale = await Sale.create(obj);
  await registerSaleProducts(products, resultSale.id);
  return { id: resultSale.id };
};
module.exports = {
  registerSale,
};
