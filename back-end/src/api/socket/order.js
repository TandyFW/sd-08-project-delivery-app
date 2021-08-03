const { findOrderCustomer } = require('../../services/customersUseCase');
const { findOrderSeller } = require('../../services/sellersUseCase');
const { decodeToken } = require('../../../config/jwtConfig');

const findConfig = {
  customer: async (id) => findOrderCustomer(id),
  seller: async (id) => findOrderSeller(id),
};
const onServer = (socket, { id, find }) => {
  socket.on('server', async () => {
    const db = await find({ id });
    socket.emit('server', {
      db,
    });
  });
};

module.exports = (io) =>
  io.on('connection', (socket) => {
    const { authorization } = socket.handshake.headers;
    const { user: { id, role } } = decodeToken(authorization);
    const find = findConfig[role];
    console.log('connection', id, role);
    onServer(socket, { id, role, find });
  });
