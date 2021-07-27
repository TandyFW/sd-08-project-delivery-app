'use strict';
const md5 = require('md5');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: md5('--adm2@21!!--'),
      role: 'administrator'
    },
    {
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: md5('fulana@123'),
      role: 'seller'
    },
    {
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: md5('$#zebirita#$'),
      role: 'customer'
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
