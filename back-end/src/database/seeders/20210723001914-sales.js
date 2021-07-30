'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [{
      userId: 3,
      sellerId: 2,
      totalPrice: 20.7,
      deliveryAddress: 'Rua Aleatoria E. Duvidosa',
      deliveryNumber: '+8000',
      salesDate: '2021-07-23 16:35:54',
      status: 'Pendente',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
