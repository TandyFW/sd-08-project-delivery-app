'use strict';
module.exports = {
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('salesProducts', [
      {
=======
  up: async (queryInterface,_Sequelize) => {
    return queryInterface.bulkInsert('salesProducts', [{
>>>>>>> main-group-2-ret-rota-order
      sale_id: 1,
      product_id: 2,
      quantity: 3,
    },
    {
      sale_id: 1,
      product_id: 1,
      quantity: 3,
    },
    ])
  },
  down: async (queryInterface,_Sequelize) => {
    return queryInterface.bulkDelete('salesProducts', null, {});
  }
};
