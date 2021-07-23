const sale = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: false });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.user,
  { onDelete: 'CASCADE', foreignKey: 'userId', as: 'user' },
  { onDelete: 'CASCADE', foreignKey: 'sellerId', as: 'user' }
  );
  };
  return SaleTable;
};

module.exports = sale;