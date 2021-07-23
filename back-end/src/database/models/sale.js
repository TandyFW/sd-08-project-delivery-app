const Sale = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define("Sale", {
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: false });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.User,
  { onDelete: 'CASCADE', foreignKey: 'userId', as: 'user' },
  { onDelete: 'CASCADE', foreignKey: 'sellerId', as: 'user' }
  );
  };
  return SaleTable;
};

module.exports = Sale;