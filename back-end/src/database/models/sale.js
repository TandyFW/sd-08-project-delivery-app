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
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User,
    { foreignKey: 'userId', as: 'user' });
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' });
  };
  
  return sale;
};

module.exports = Sale;
