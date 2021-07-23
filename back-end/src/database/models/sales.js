const Sale = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'salesDate',
    updatedAt: false,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' });
    Sales.belongsTo(models.Users,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sales;
};

module.exports = Sale;