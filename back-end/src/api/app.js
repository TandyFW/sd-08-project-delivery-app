const express = require('express');
const bodyParser = require('body-parser');
const LoginRouter = require('../routers/LoginRouter');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(`${__dirname}/public`));
app.use(LoginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
