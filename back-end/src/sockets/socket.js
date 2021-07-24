module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Conectado');
    socket.on('test', (teste) => {
      console.log(teste);
    });
  });
};