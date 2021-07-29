const Sales = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
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
    salesDate: {
      type: DataTypes.DATE,
      notNull: true,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      notNull: true,
    },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    underscore: false,
    timestamps: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.user,
      { foreignKey: 'userId', as: 'users' });
    sales.belongsTo(models.user,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return sales;
};

module.exports = Sales;
