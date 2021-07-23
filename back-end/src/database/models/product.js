const Product = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  }, { timestamps: false });

  ProductTable.associate = (models) => {
    ProductTable.hasMany(models.SaleProduct,
    { foreignKey: 'productId', as: 'salesProducts' });
    ProductTable.hasMany(models.Sale,
      { foreignKey: 'saleId', as: 'sales' });
};
  return ProductTable;
};

module.exports = Product;
