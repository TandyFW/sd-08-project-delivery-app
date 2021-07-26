const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    tableName: 'users'
  });

  user.associate = (models) => {
    user.hasMany(models.Sale,
    { foreignKey: 'userId', as: 'sale' });
};
  
  return user;
};

module.exports = User;
