'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'url_image'
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};