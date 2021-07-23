const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false
  });

  return product;
}

module.exports = product;