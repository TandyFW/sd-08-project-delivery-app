'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      product_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       references: {
         model: 'products',
         key: 'id',
       }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, { timestamps: false});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};