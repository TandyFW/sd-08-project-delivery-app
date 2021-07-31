// eslint-disable-next-line max-lines-per-function
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(10, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });
  
  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'client' });
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return sale;
};

module.exports = Sale;