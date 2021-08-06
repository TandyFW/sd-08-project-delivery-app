const { updateOrder, getSaleById } = require('../services');

function clientSetOrder(socket, io) {
  socket.on('clientSetOrderStatus', async ({ id, status }) => {
    if (status !== '') {
      const { dataValues } = await updateOrder(id, status);
      socket.broadcast.emit('getUpdatedStatus', dataValues.status.status);
    }
  });
}
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected! ID: ${socket.id}`);

    socket.on('setOrderStatus', async ({ id, status }) => {
      if (status !== '') {
        console.log('Upadate');
        const { dataValues } = await updateOrder(id, status);
        socket.broadcast.emit('getUpdatedStatus', dataValues.status.status);
      }
    });

    clientSetOrder(socket, io);

    socket.on('getUpdatedStatus', async (id) => {
      const data = await getSaleById(id);
      socket.emit('getUpdatedStatus', data.status);
    });

    socket.on('disconnect', async () => {
      console.log(`Desconectou ${socket.id}`);
    });
  });
};
