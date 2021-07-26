const { Op } = require('sequelize');
const user = require('../database/models');

const findUser = async (email, password) => {
  try {
    const result = await user.findOne({ where: { [Op.and]: [{ email }, { password }] } });
    if (!result) {
      return {
        statusCode: 404,
        message: 'Not found',
      };
    }

    return {
      statusCode: 200,
      message: 'Login exist',
    };
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