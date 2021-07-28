const md5 = require('md5');

module.exports = {
  // eslint-disable-next-line max-lines-per-function
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: md5('--adm2@21!!--'),
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: md5('fulana@123'),
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: md5('$#zebirita#$'),
        role: 'customer',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  },
};
