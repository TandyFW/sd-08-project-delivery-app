'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 5
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 2
      },
      {
        sale_id: 2,
        product_id: 11,
        quantity: 2
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
