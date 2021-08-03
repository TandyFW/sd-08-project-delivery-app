const { findOrderCustomer } = require('../../services/customersUseCase');
const { findOrderSeller } = require('../../services/sellersUseCase');
const { decodeToken } = require('../../../config/jwtConfig');

const findConfig = {
  customer: async (id) => findOrderCustomer(id),
  seller: async (id) => findOrderSeller(id),
};
// const onServer = (socket, { id, find }) => {
//   socket.on('server', async () => {
//     const db = await find({ id });
//     socket.emit('server', {
//       db,
//     });
//   });
// };

const newOrder = (io, socket) => {
  socket.on('newOrder', (string) => {
    io.emit('newOrder', string);
  });
};

const updateStatus = (io, socket) => {
  socket.on('updateOrder', (string) => {
    io.emit('updateOrder', string);
  });
};

module.exports = (io) => io.on('connection', (socket) => {
    const { authorization } = socket.handshake.headers;
    const { user: { id, role } } = decodeToken(authorization);
    const find = findConfig[role];
    // onServer(socket, { id, role, find });
    newOrder(io, socket);
    updateStatus(io, socket);
  });
