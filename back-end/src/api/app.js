const express = require('express');
const cors = require('cors');
const { loginRoute, registerByAdminRoute, productRoute } = require('./routes');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static('public'));

app.use(loginRoute);
app.use(registerByAdminRoute);
app.use(productRoute);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
