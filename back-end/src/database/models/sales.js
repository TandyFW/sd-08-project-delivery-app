const sale = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
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

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' });
    sales.belongsTo(models.users,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return sales;
};

module.exports = sale;
