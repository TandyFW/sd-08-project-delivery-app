'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sales_products', [{
      sale_id: 1,
      product_id: 2,
      quantity: 3,
    },
    ])
  },

  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sales_products', null, {});
  }
};
