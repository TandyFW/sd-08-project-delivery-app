const rescue = require('express-rescue');
const UserService = require('../services/userService');
const { CREATED } = require('../statusCode');

const create = rescue(async (req, res) => {
  const { name, email, password, role = 'customer' } = req.body;
  const user = await UserService.create(name, email, password, role);
  res.status(CREATED).json({ user });
});

module.exports = {
  create,
};
