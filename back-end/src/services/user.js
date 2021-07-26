const { User } = require('../database/models');

const findByEmail = async (email) => User.findOne({ where: { email } });

module.exports = {
  findByEmail,
};
