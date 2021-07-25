const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 3001;
const app = require('./app');
const routes = require('../database/router/routes');

app.use(express.json());
app.use(cors());
app.use('/delivery', routes);

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
