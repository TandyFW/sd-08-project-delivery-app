const express = require('express');
const userService = require('../services/userService');
const { status } = require('../middlewares/status');

const routes = express.Router();

routes.post('/', async (req, res) => {
try {
const { email, password } = req.body;
const loginUser = await userService.loginUser({ email, password });
return res.status(status.OK).json({ loginUser });
} catch (error) {
return res.status(status.NotFound).json({ message: error.message });
}
});

module.exports = routes;
