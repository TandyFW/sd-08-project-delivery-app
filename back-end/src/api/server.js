const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = require('./app');
const router = require('../routes');

app.use(express.json());

app.use(cors());

app.use('/', router);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
