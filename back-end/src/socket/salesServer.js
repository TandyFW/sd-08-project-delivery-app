const { findOrderSeller } = require('../services/sellersUseCase');
const { decodeToken } = require('../../config/jwtConfig');

const onServer = async (socket, id) => {
  const db = await findOrderSeller({ id });
  socket.broadcast.emit('server', {
    db,
  });
};

const onClient = async (socket) => {
  const db = await findOrderSeller({ id });
  socket.emit('client', {
    db,
  });
};

module.exports = (io) =>
  io.on('connection', async (socket) => {
    const { user } = decodeToken(socket.authentication);
    onServer(socket, user);
    onClient(socket)
  });
