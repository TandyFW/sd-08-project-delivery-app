const { findAll } = require('../services/UserService');

const getAllUsers = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

module.exports = { getAllUsers };
