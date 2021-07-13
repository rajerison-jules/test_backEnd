module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.TEXT,
    },
    voitureId: {
      type: DataTypes.INTEGER,
    },
  });

  return Comment;
};
