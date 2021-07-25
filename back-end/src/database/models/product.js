const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING(100),
      price: DataTypes.STRING(100),
      urlImage: {
        type: DataTypes.STRING(255),
        field: "url_image",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE, 
        field: 'updated_at',
      }
    },
  );

  return Product;
};

module.exports = Product;