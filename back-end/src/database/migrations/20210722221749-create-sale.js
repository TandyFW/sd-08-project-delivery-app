'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id'
      }
    },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id'
      }
    },
    totalPrice: {
      type: Sequelize.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
      /* createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } */
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};