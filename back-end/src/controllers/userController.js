const express = require('express');
const userService = require('../services/userService');
const { status } = require('../middlewares/status');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');

const routes = express.Router();

routes.post('/', validateEmailExist, validateNameExist, async (req, res) => {
	try {
		const { name, email, password, role = 'customer' } = req.body;
		const newUser = await userService.registerUser({ name, email, password, role });
		return res.status(status.Created).json({ newUser });
	} catch (error) {
		return res.status(status.Conflict).json({ message: error.message });
	}
});

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
