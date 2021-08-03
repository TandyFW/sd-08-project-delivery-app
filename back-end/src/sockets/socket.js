const saleService = require('../services/saleService');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('preparando', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Preparando');
  });

  socket.on('emTransito', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Em Trânsito');
  });

  socket.on('entregue', async ({ id }) => {
    await saleService.changeOrderStatus(id, 'Entregue');
  });
});