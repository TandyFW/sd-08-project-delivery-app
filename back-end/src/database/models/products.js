const product = (sequelize, DataTypes) => {
  const product = sequelize.define("products", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false
  });

  // product.associate = (models) => {
  //   models.products.hasMany(models.salesproducts)
  // }

  return product;
}

module.exports = product;
