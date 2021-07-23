const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    urlImage: { 
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url_image',
      defaultValue: '',
    }
  },
  {
    timestamps: false,
  });

  product.associate = (models) => {
    product.hasMany(models.SaleProduct,
    { foreignKey: 'productId', as: 'sale_product' });
  };
  
  return product;
};

module.exports = Product;
