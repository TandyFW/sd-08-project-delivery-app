const sale = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
    createdAt: 'saleDate',
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
