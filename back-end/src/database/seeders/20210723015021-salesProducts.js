'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SalesProducts', [{
      saleId: 1,
      productId: 1,
      quantity: 5
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  }
};
