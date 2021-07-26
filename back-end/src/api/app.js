const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('../../public'));

app.use(require('./router'));

// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
