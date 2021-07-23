'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Bruno Oliveira',
        email: 'brunooliveira@gmail.com',
        password: '123456',
        role: 'customer',
      },
      {
        id: 2,
        name: 'Guilherme Cyrillo',
        email: 'cyrillo@gmail.com',
        password: '123456',
        role: 'customer',
      },
      {
        id: 3,
        name: 'Raissa Baptista',
        email: 'raissa@gmail.com',
        password: '123456',
        role: 'customer',
      },
      {
        id: 4,
        name: 'Vini Vasconcelos',
        email: 'viniv@gmail.com',
        password: '123456',
        role: 'seller',
      },
      {
        id: 5,
        name: 'Francisco Neto',
        email: 'neto@gmail.com',
        password: '123456',
        role: 'seller',
      },
      {
        id: 6,
        name: 'Dona Tereza',
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--',
        role: 'admin',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  }
};
