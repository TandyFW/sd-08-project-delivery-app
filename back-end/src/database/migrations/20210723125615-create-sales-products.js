'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
