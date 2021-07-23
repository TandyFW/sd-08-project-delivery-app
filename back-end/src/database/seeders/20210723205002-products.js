'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('products', [
      {id: 1, name: 'Skol Lata 250ml',  price: 2.20, url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg'},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('products', null, {})
  }
};
