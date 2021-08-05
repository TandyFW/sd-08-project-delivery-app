// Socket para atualização do 'status' de uma venda em tempo real.
// Recebe o 'id' e o novo 'status' e retorna o status atualizado no DB.

const { updateOrder, getSaleById } = require('../services');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected! ID: ${socket.id}`);

    socket.on('setOrderStatus', async ({ id, status }) => {
      if (status !== '') {
        await updateOrder(id, status);
      }

      const data = await getSaleById(id);
      console.log(data.status);
      io.emit('getUpdatedStatus', data.status);
    });

    // socket.on('disconnect', async () => {
    // });
  });
};
