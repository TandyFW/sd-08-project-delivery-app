'use strict';
module.exports = {
  up: async (queryInterface,_Sequelize) => {
<<<<<<< HEAD
    return queryInterface.bulkInsert('salesProducts', [{
=======
    return queryInterface.bulkInsert('salesProducts', [
      {
>>>>>>> a99b9e1f6d8b42edb2ea518cf33f86ed78989c4c
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
