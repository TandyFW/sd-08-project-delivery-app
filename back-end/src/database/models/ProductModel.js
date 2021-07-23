const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  
  product.associate = (models) => {
    product.hasMany(models.SaleProducts,
      { foreignKey: 'productId', as: 'salesProducts' });
  };

  return product;
};

module.exports = Product;