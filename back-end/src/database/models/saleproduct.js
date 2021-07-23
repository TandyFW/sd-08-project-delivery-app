const saleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('saleProduct', {
    quantity: DataTypes.STRING,
  }, { timestamps: false });

  SaleProductTable.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      onDelete: 'CASCADE',
      as: 'products',
      through: SaleProductTable,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.product.belongsToMany(models.sale, {
      onDelete: 'CASCADE',
      as: 'sales',
      through: SaleProductTable,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SaleProductTable;
};

module.exports = saleProduct;
