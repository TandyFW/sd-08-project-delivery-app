const { Op } = require('sequelize');
const { user } = require('../../database/models');
const { CONFLICT, UNAUTHORIZED } = require('../services/statusCode');
const { verifyToken } = require('../services/userService');

const findUserByNameOrEmail = async (req, res, next) => {
  const { email, name } = req.body;
  const registredUser = await user.findOne({
    where: { [Op.or]: [{ email }, { name }] },
  });
  if (registredUser) {
    return res.status(CONFLICT).json({ message: 'Usuário já cadastrado.' });
  }
  next();
};
const verifyRoleAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const userAdmin = verifyToken(token);
  console.log(userAdmin);
  if (userAdmin.role !== 'administrator') {
    res
      .status(UNAUTHORIZED)
      .json({ message: 'Usuário deve ser um administrador!' });
  } else {
    next();
  }
};

module.exports = {
  findUserByNameOrEmail,
  verifyRoleAdmin,
};
