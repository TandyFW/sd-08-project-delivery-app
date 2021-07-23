'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sales', [{
      userId: 3,
      sellerId: 2,
      totalPrice: 20.7,
      deliveryAddress: 'Rua Aleatoria E. Duvidosa',
      deliveryNumber: '+8000',
      salesDate: Date.now(),
      status: 'Esquecido',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
