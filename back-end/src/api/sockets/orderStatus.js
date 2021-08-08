// Socket para atualização do 'status' de uma venda em tempo real.
// Recebe o 'id' e o novo 'status' e retorna o status atualizado no DB.

const { updateOrder, getSaleById } = require('../services');

function clientSetOrder(socket) {
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

    clientSetOrder(socket);

    socket.on('getUpdatedStatus', async (id) => {
      const data = await getSaleById(id);
      socket.emit('getUpdatedStatus', data.status);
    });

    socket.on('disconnect', async () => {
      console.log(`Desconectou ${socket.id}`);
    });
  });
};
