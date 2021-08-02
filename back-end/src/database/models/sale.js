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
    },
    sellerId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'sales',
    underscored: true
  });

  sale.associate = (models) => {

    sale.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'customer'
    })

    sale.belongsTo(models.User, {
      foreignKey: 'seller_id',
      as: 'seller'
    })
    sale.belongsToMany(models.Product, { through: 'sales_products', attributes: [] , as: 'Products'});
    sale.hasMany(models.SaleProduct, {
      as: 'sales'
    });

  };
  
  return sale;
};

module.exports = Sale;
