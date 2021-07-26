const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../models/index');


const hashTransformation = (password) => {
  return md5(password);
}

const login = async (email, password) => {
  const newPass = hashTransformation(password)
  const [result] = await user.findAll({ where: { email, password: newPass } });
  if (!result) return  { error: 404, message: "Usuário não encontrado" }
  return result
}


const register = async (name, email, password) => {
  const [validUser] = await user.findAll({
    where: {
      [Op.or]: [
        { email },
        { name },
      ]
    }
  })
  if (validUser) return { error: 409, message: "Usuário existente" }
  const newPass = hashTransformation(password);
  const result = await user.create({ name, email, password: newPass, role: 'customer' });
  return result

}

module.exports = {
  login, register
}