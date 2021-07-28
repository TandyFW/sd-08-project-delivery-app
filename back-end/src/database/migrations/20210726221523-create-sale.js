"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      salesDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("sales");
  },
};
