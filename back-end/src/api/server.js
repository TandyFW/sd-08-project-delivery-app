const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('./app');
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3001;
http.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`));



