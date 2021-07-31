const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    sellerId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seller_id',
    },
    totalPrice: { 
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    tableName: 'sales'
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user', allowNull: false });
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller', allowNull: false });
    sale.hasMany(models.SaleProduct,
      { foreignKey: 'sale_id', as: 'sales_products', allowNull: false });
  };
  
  return sale;
};

module.exports = Sale;
