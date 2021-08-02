const { Op } = require('sequelize');
const { user } = require('../../database/models');

module.exports = async () => {
  const result = await user.findAll({
    where: {
      [Op.or]: [
        { role: 'seller' },
        { role: 'customer' },
      ],
    },
    order: ['id'],
  });

  return result;
};
