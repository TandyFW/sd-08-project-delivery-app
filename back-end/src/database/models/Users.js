module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING(100),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(32),
      role: DataTypes.STRING(20),
    },
    {
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'user_id',
      as: 'user',
    });
    User.hasMany(models.Sale, {
      foreignKey: 'seller_id',
      as: 'seller',
    });
  };

  return User;
};
