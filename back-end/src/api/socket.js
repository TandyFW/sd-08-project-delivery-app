<<<<<<< HEAD
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

=======
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

>>>>>>> 819f36eebf9d94350f7211243fd398d72b8b123a
const listUser = {};

const delivery = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
    });
    socket.on('hello', (id) => {
<<<<<<< HEAD
      console.log('O usuario ', id, 'chegou');
      listUser[id] = socket.id;
    });
    socket2(socket, listUser);
=======
      console.log('O Usuário', id, 'chegou');
      listUser[id] = socket.id;
    });
    flow(socket, listUser);
>>>>>>> 819f36eebf9d94350f7211243fd398d72b8b123a
    socket.on('disconnect', () => {});
  });
};

module.exports = {
  delivery,
};
