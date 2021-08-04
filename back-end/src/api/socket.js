function socket2(socket, listUser) {
  socket.on('make', (buyData) => {
    const { sellerId, userId, state } = buyData;
    console.log('vendedor ', sellerId, ' usuario ', userId, ' estado ', state);
    console.log(listUser, listUser[sellerId], listUser[userId]);
    switch (state) {
      case 'Pendente':
        console.log('Pendente', listUser[sellerId]);
        socket.to(listUser[sellerId]).emit('state', 'Pendente');
        break;
      case 'Preparando':
        console.log('Preparando', listUser[userId]);
        socket.to(listUser[userId]).emit('state', 'Preparando');
        break;
      case 'Em Trânsito':
        console.log('Em Trânsito', listUser[userId]);
        socket.to(listUser[userId]).emit('state', 'Em Trânsito');
        break;
      case 'Entregue':
        console.log('Entregue', listUser[sellerId]);
        socket.to(listUser[sellerId]).emit('state', 'Entregue');
        break;
      default:
        console.log('erro', listUser[sellerId]);
        socket.to(listUser[sellerId]).emit('state', 'erro');
        socket.to(listUser[userId]).emit('state', 'erro');
        break;
    }
  });
}

const listUser = {};

const delivery = (io) => {
    console.log('oi');
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
    });
    socket.on('hello', (id) => {
      console.log('O usuario ', id, 'chegou');
      listUser[id] = socket.id;
    });
    socket2(socket, listUser);
    socket.on('disconnect', () => {});
  });
};

module.exports = {
    delivery,
};
