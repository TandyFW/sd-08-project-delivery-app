const rescue = require('express-rescue');
const UserService = require('../services/user');

const create = rescue(async (req, res) => {
  const result = await UserService.create(req.body);
  res.status(201).json(result);
});

const adminCreate = rescue(async (req, res) => {
  const result = await UserService.adminCreate(req.body);
  res.status(201).json(result);
});

module.exports = {
  create,
  adminCreate,
};
