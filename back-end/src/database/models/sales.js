const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
  userId: DataTypes.INTEGER,
  sellerId: DataTypes.INTEGER,
  totalPrice: DataTypes.DECIMAL,
  deliveryAddress: DataTypes.STRING,
  deliveryNumber: DataTypes.STRING,
  status: DataTypes.STRING,
  saleDate: DataTypes.DATE,
},
{
  tableName: 'sales',
  timestamps: false,
  underscored: true,
});

Sales.associate = (models) => {
  Sales.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  Sales.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
}

  return Sales;
};

module.exports = Sales;