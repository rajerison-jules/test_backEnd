module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
   
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.TEXT,
    },
  });

  return Comment;
};