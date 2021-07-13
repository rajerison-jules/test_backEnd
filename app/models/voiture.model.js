module.exports = (sequelize, Sequelize) => {
  const Voiture = sequelize.define("voiture", {
    mark: {
      type: Sequelize.STRING
    },
    detail: {
      type: Sequelize.STRING
    },
    send: {
      type: Sequelize.BOOLEAN
    }
  });

  return Voiture;
};