const { user } = require('../../../database/models');

module.exports = async (role) => {
  const result = await user.findAll({ where: { role } });

  return result;
};
