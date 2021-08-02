const adminService = require('../services/adminUseCase');

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const result = await adminService.createUser({ name, email, password, role });
    res.status(201).json(result);
  } catch (error) {
    const message = error.responseError() || error.message;
    const status = error.statusCode || 500;
    res.status(status).json(message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await adminService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    const message = error.responseError() || error.message;
    const status = error.statusCode || 500;
    res.status(status).json(message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
