module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',  //aqui
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
      as: 'user',            //alteracao
    });
    User.hasMany(models.Sale, {
      foreignKey: 'seller_id',
      as: 'seller',       //alteracao
    });
  };

  return User;
};
