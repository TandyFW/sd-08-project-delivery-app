const SaleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    quantity: DataTypes.STRING,
  }, { timestamps: false });

  SaleProductTable.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      onDelete: 'CASCADE',
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.Product.belongsToMany(models.Sale, {
      onDelete: 'CASCADE',
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SaleProductTable;
};

module.exports = SaleProduct;
