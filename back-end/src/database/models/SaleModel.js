const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(10,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  
  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'client' });
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' });
    sale.hasMany(models.SaleProducts,
      {foreignKey: 'saleId', as: 'sale' })
  };

  return sale;
};

module.exports = Sale;