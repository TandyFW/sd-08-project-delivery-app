const saleService = require('../services/saleService');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('preparando', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Preparando');
    io.emit('preparando', id);
  });

  socket.on('emTransito', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Em Trânsito');
    io.emit('emTransito', id);
  });

  socket.on('entregue', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Entregue');
    io.emit('entregue', id);
  });
});