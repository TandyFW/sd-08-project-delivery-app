module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleProduct', {
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });
  
  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return saleProduct;
};
