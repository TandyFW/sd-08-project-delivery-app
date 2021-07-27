const rescue = require('express-rescue');
const UserService = require('../services/user');

const create = rescue(async (req, res) => {
  const result = await UserService.create(req.body);
  res.status(201).json(result);
});

module.exports = {
  create,
};
