const crypto = require('crypto');

const userService = require('../service/userService');
const { sale, user } = require('../database/models');

const messageError = 'Algo deu errado';

// callback criadas para testes das associações
const getAllUsersSale = async (req, res) => {
  try {
    const data = await user.findAll({
      include: [
        { model: sale, as: 'saleByUser', attributes: { exclude: ['user_id', 'seller_id'] } },
        { model: sale, as: 'saleBySeller', attributes: { exclude: ['user_id', 'seller_id'] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const getAllSalesUser = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: user, as: 'user', attributes: { exclude: ['id'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id'] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await user.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};
// ----------------------------------------------------------------------

// CALLBACK VALIDAS
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const { message, code, data, token } = await userService.login(email, hash);
    if (message) return res.status(code).json({ message });
    return res.status(200).json({
      user: { name: data.name, email: data.email, role: data.role, token },
    });
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const { message, code, data } = await userService.register(name, email, hash, role);
    if (message) return res.status(code).json({ message });
    return res.status(201).json({ newUser: data });
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

module.exports = {
  // teste de associações
  getAllUsersSale,
  getAllSalesUser,
  getAllUsers,
  // --------------------
  // CALLBACK VALIDAS
  login,
  register,
};