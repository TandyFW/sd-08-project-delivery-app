const { User } = require('../database/models');

const getAllSellers = async () => (
  User.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] }));

module.exports = { getAllSellers };
