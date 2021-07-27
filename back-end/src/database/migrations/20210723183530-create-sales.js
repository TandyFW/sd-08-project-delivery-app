'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price'
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'delivery_address'
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(50),
        field: 'delivery_number'
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date'
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('sales');
  }
};
