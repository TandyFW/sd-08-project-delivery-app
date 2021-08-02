const { Op } = require('sequelize');
const { users } = require('../database/models');
const JWT = require('./utility/jwt');

const findUser = async (email, password) => {
  try {
    const result = await users
      .findOne({ where: { [Op.and]: [{ email }, { password }] }, raw: true });

    if (!result) {
      return {
        statusCode: 404,
        json: { validate: false },
      };
    }

    const newToken = JWT(result);
    const user = { id: result.id, email, name: result.name, role: result.role, token: newToken };
    return { statusCode: 200, json: { validate: true, user } };
  } catch (err) {
    return {
      statusCode: 500,
      message: 'Erro in DB',
    };
  }
};

module.exports = {
  findUser,
};
