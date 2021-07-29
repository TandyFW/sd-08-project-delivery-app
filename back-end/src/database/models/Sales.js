const Sales = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    "sales",
    {
      totalPrice: {
        type: DataTypes.DECIMAL,
        notNull: true,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        notNull: true,
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        notNull: true,
      },
      saleDate: {
        type: DataTypes.DATE,
        notNull: true,
      },
      status: {
        type: DataTypes.STRING,
        notNull: true,
      },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      underscore: true,
      tableName: "sales",
      timestamps: false,
    }
  );

  sales.associate = (models) => {
    sales.belongsTo(models.user, { foreignKey: "user_id", as: "users" });
    sales.belongsTo(models.user, { foreignKey: "seller_id", as: "seller" });
  };

  return sales;
};

module.exports = Sales;
