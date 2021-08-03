'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id'},
        primaryKey: true,
        allowNull: false,
        unique: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id'},
        primaryKey: true,
        allowNull: false,
        unique: false,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue:0
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
