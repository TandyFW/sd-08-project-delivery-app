'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('sales', [{
      user_id: 3,
      seller_id: 2,
      total_price: 3,
      delivery_address: 'Rua Entrega',
      delivery_number: '0',
      sale_date: '2021-07-25 14:49:10',
      status: 'Entregue',
    }], {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('sales', null, {});
  }
};
