module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'products'
    });

  product.associate = (models) => {
    product.belongsToMany(models.sale, { through: models.salesProduct });
    product.hasMany(models.salesProduct);
  };

  return product;
};
