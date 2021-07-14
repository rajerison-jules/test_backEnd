module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      username: {
        type: DataTypes.STRING,
      },
      Email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      
    });
  
    return User;
  };
  