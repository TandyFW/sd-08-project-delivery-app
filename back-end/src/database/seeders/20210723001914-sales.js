'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [{
      user_id: 3,
      seller_id: 2,
      total_price: 20.7,
      delivery_address: 'Rua Aleatoria E. Duvidosa',
      delivery_number: '+8000',
      sale_date: '2021-07-23 16:35:54',
      status: 'Pendente',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
