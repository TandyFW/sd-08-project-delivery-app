const { Op } = require("sequelize");
const { user } = require("../models");
const { CONFLICT } = require("../services/statusCode");

const findUserByNameOrEmail = async (req, res, next) => {
  const { email, name } = req.body;
  const registredUser = await user.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  if (registredUser) return res.status(CONFLICT).json({ message: 'Usuário já cadastrado.' });
  next();
};

module.exports = {
  findUserByNameOrEmail,
};
