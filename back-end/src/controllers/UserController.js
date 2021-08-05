const { findAll, remove } = require('../services/UserService');

const getAllUsers = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await remove(id);

  return res.status(200).json();
};

module.exports = { getAllUsers, deleteUser };
