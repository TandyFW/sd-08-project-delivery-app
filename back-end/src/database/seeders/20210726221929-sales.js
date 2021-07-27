'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('sales', [{
      user_id: 1,
      seller_id: 2,
      totalPrice: 3,
      deliveryAddress: 'Rua Entrega',
      deliveryNumber: '0',
      salesDate: '2021-07-25 14:49:10',
      status: 'Entregue',
    }], {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('sales', null, {});
  }
};
