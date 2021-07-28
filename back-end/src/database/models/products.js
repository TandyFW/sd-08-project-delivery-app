const product = (sequelize, DataTypes) => {
  const product = sequelize.define("products", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  return product;
}

module.exports = product;
