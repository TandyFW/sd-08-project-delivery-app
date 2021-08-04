const { saleService } = require('../services');

module.exports = (socket, io) => {
  socket.on('updateOrder-server', async ({ id, newStatus }) => {
    const { result } = await saleService.updateSaleStatus(id, { status: newStatus });
    if (!result) return null;
    io.emit('updateOrder-client', ({ id, newStatus }));
  });
};
