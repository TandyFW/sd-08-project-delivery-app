const emTransito = 'Em Trânsito';

function flow(socket, listUser) {
  socket.on('make', ({ sellerId, userId, state }) => {
    console.log('vendedor ', sellerId, ' usuario ', userId, ' estado ', state);
    console.log(listUser, listUser[sellerId], listUser[userId]);
    switch (state) {
      case 'Pendente': console.log('Pendente', listUser[sellerId]);
        return socket.to(listUser[sellerId]).emit('state', 'Pendente');
      case 'Preparando': console.log('Preparando', listUser[userId]);
        return socket.to(listUser[userId]).emit('state', 'Preparando');
      case emTransito: console.log(emTransito, listUser[userId]);
        return socket.to(listUser[userId]).emit('state', emTransito);
      case 'Entregue': console.log('Entregue', listUser[sellerId]);
        return socket.to(listUser[sellerId]).emit('state', 'Entregue');
      default:
        console.log('erro', listUser[sellerId]);
        socket.to(listUser[sellerId]).emit('state', 'erro');
        return socket.to(listUser[userId]).emit('state', 'erro');
    }
  });
}

const listUser = {};

const delivery = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
    });
    socket.on('hello', (id) => {
      console.log('O Usuário', id, 'chegou');
      listUser[id] = socket.id;
    });
    flow(socket, listUser);
    socket.on('disconnect', () => {});
  });
};

module.exports = {
  delivery,
};
