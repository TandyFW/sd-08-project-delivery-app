const { User } = require('../database/models');

const userExist = async (email) => User.findOne({ where: { email } });

module.exports = {
  userExist,
};
