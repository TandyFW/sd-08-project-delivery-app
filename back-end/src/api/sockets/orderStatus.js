const updateOrder = require('../services/updateOrder');
const getSaleById = require('../services/getSaleById');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected! ID: ${socket.id}`);

    socket.on('setOrderStatus', async ({ id, status }) => {
      if (status !== '') {
        await updateOrder(id, status);
      }

      const data = await getSaleById(id);
      io.emit('getUpdatedStatus', data.status);
    });

    // socket.on('disconnect', async () => {
    // });
  });
};
