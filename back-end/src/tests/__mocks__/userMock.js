const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const userMockDB = {
  id: 1,
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

module.exports = { userMockDB, userMockDBResponse }
