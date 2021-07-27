const users = require('express').Router();

const CONTROLLERS = require("../controllers/users")
users.post('/login', CONTROLLERS.login);

users.post('/create', CONTROLLERS.register);

users.get('/sellers', CONTROLLERS.getAllSellers);

module.exports = users;