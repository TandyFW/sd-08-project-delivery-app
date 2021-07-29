module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected! ID: ${socket.id}`);

    // socket.on('', () => {
    // });

    // socket.on('disconnect', async () => {
    // });
  });
};
