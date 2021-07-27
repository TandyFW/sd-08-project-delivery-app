module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  },
  {
    timestamps: false,
    });

  product.associate = (models) => {
    product.hasOne(models.sales_product);
  };

  return product;
};
