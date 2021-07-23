'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('salesProducts', [
      {
        saleId: 1,
        productId: 5,
        quantity: 1, 
      },
      {
        saleId: 1,
        productId: 6,
        quantity: 2, 
      },
      {
        saleId: 2,
        productId: 4,
        quantity: 4, 
      },
      {
        saleId: 3,
        productId: 1,
        quantity: 2, 
      },
      {
        saleId: 3,
        productId: 2,
        quantity: 2, 
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', {});
  }
};
