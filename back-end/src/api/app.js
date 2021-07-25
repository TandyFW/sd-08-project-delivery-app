const express = require('express');
const userController = require('../database/controllers/userControllers');

const app = express();
const router = express.Router();

router.use('/', userController);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
