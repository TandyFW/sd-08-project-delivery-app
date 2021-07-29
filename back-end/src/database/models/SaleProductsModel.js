const SaleProducts = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('SaleProducts', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
  });
  
  saleProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale,
      { as: 'sales', foreignKey: 'productId', otherKey: 'saleId', through: saleProducts });
    models.Sale.belongsToMany(models.Product,
    { as: 'products', foreignKey: 'saleId', otherKey: 'productId', through: saleProducts });
  };

  return saleProducts;
};

module.exports = SaleProducts;