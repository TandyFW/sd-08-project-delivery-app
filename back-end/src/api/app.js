const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, '../../public/images')));

app.use(require('./router'));

// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
