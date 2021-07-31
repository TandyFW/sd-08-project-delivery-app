const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const userMockDB = {
  id: 4,
  name: 'Ciclano da Silva',
  email: 'user@example.com',
  password: 'password',
  role: 'customer',
}

const token = jwt.sign({ data: { id: userMockDB.id, email: userMockDB.email } }, secret, jwtConfig);

const userMockDBResponse = {
  token,
  user: {
    name: 'Ciclano da Silva',
    email: 'user@example.com',
    role: 'customer',
  }
};
const userAdminMockDB = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
  role: 'administrator'
};

const userSellerMockDB = {
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  password: 'fulana@123',
  role: 'seller'
};

const userCustomerMockDB = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
  role: 'customer'
};

module.exports = {
  userMockDB,
  userMockDBResponse,
  token,
  userAdminMockDB,
  userSellerMockDB,
  userCustomerMockDB,
};
