const express = require('express');
const path = require('path');
const cors = require('cors');
const { loginRoute, registerRoute, productsRoute, orderRoute } = require('./routes');
const handleError = require('../middlewares/errorHandler');
// const SOCKET_PORT = process.env.SOCKET_PORT || 3002;
const app = express();
app.use(express());
// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//     cors: {
//       origin: '*', // url aceita pelo cors
//       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos aceitos pela url
//     }
// });
app.use(cors());
app.use(express.json());
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/products', productsRoute);
app.use('/order', orderRoute);
app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));
app.use(handleError);
// console.log('texto');

// io.on('connection', (socket) => {
//     console.log(`Usuário conectado. ID: ${socket.id} `);
//     socket.on('ping', () => {
//         console.log(`${socket.id} emitiu um ping!`);
//     });
// });
app.all('*', (_req, res) => res.status(404).json({ message: 'Not Found' }));
// io.listen(SOCKET_PORT);
module.exports = app;