const rescue = require('express-rescue');
const UserService = require('../services/userService');
const { CREATED, OK } = require('../statusCode');

const create = rescue(async (req, res) => {
  const { name, email, password, role = 'customer' } = req.body;
  const user = await UserService.create(name, email, password, role);
  res.status(CREATED).json({ user });
});

const getUsers = rescue(async (_req, res) => {
    const Users = await UserService.getUsers();
    res.status(OK).json({ users: Users });
});

module.exports = {
  create,
  getUsers,
};
