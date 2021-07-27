const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const LoginRouter = require('../routers/LoginRouter');
const RegisterRouter = require('../routers/RegisterRouter');
const CustomerRouter = require('../routers/CustomerRouter');

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(`${__dirname}/public`));
app.use(LoginRouter);
app.use(RegisterRouter);
app.use(CustomerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
