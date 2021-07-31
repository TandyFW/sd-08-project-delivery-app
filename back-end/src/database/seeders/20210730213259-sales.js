'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: '3',
        seller_id: '2',
        total_price: 11.00,
        delivery_address: 'Rua Guanabara',
        delivery_number: 'Número 400',
        status: 'Pendente',
      },
      {
        user_id: '3',
        seller_id: '2',
        total_price: 21.98,
        delivery_address: 'Rua Guanabara',
        delivery_number: 'Número 400',
        status: 'Pendente',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
