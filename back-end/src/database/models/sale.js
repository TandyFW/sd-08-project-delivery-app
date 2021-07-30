module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'sales',
    },
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,  { foreignKey: 'user_id', as: 'userId' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'sellerId' });
    // Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'users' });
  }
  return Sale;
};
