const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sales", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' });
    sale.belongsTo(models.users,
      { foreignKey: 'sellerId', as: 'user_seller' });
  };

  return sale;
}

module.exports = sale;
