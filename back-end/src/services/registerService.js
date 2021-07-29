const { Op } = require('sequelize');
const user = require('../database/models');

const conflictUser = async (name, email) => {
  try {
    const result = user.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    return result;
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

const registerUser = async (name, email, password) => {
  try {
    if (conflictUser(name, email)) return { statusCode: 409, message: 'Conflict' };

    await user.create({
      name,
      email,
      password,
      role: 'user',
    });

    return {
      statusCode: 201,
      message: 'Created',
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

module.exports = {
  registerUser,
};
