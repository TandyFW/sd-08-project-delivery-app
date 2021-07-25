'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        name: 'Pessoa Customer',
        email: 'customerr@gmail.com',
        password: '123456',
        role: 'customer',
      },
      {
        name: 'Pessoal Seller',
        email: 'seller@gmail.com',
        password: '123456',
        role: 'seller',
      },
      {
        name: 'Pessoa Admin',
        email: 'admin@gmail.com',
        password: '123456',
        role: 'admin',
      },
      ], { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
