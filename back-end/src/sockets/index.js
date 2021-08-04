const SaleService = require('../services/sales');

const updateSaleStatus = async (io, id, status) => {
  await SaleService.updateSale(id, status);
  io.emit('refreshOrder', status);
};

module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`Client ${socket.id} connected`);
    socket.on('prepareOrder', (id) => updateSaleStatus(io, id, 'Preparando'));
    socket.on('dispatchOrder', (id) => updateSaleStatus(io, id, 'Em Trânsito'));
  });
};
