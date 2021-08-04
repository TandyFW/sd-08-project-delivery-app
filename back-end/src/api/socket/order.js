// const { findOrderCustomer } = require('../../services/customersUseCase');
// const { findOrderSeller } = require('../../services/sellersUseCase');
const { decodeToken } = require('../../../config/jwtConfig');

const sockets = [];

// const findConfig = {
//   customer: async (id) => await findOrderCustomer(id),
//   seller: async (id) => await findOrderSeller(id),
// };

const newSocket = async (socket) => {
  const { authorization } = socket.handshake.headers;
  const { user: { id, role } } = decodeToken(authorization);
  // const user = await findConfig[role];
  sockets.push({ socketId: socket.id, id, role });
};

const newOrder = (io, socket) => {
  socket.on('newOrder', (order) => {
    io.emit('newOrder', order);
  });
};

const updateStatus = (io, socket) => {
  socket.on('updateOrder', (obj) => {
    io.emit('updateOrder', obj);
  });
};

const socketDisconnect = (socket) => {
  socket.on('disconnect', () => {
    sockets = sockets.filter((obj) => obj.socketId !== socket.id);
    console.log(`${socket.id} se desconectou`);
  });
};

module.exports = (io) => io.on('connection', (socket) => {
  console.log(`${socket.id} se conectou`);
  newSocket(socket);
  newOrder(io, socket);
  updateStatus(io, socket);
  socketDisconnect(socket);
});
