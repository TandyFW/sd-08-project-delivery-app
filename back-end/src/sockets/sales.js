const IO = require('./socket');

const SaleService = require('../services/sales');

const updateSaleStatus = async (io, id, status) => {
  await SaleService.updateSale(id, status);
  io.emit('refreshOrder', status, id);
};

IO.on('connect', (socket) => {
  console.log(`Client ${socket.id} connected`);
  socket.on('prepareOrder', (id) => updateSaleStatus(IO, id, 'Preparando'));
  socket.on('dispatchOrder', (id) => updateSaleStatus(IO, id, 'Em Trânsito'));
  socket.on('deliveredOrder', (id) => updateSaleStatus(IO, id, 'Entregue'));
});
