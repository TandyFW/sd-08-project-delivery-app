"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
        field: "user_id",
      },
      selleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
        field: "seller_id",
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
        field: "total_price",
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_address",
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_number",
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "sale_date",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
