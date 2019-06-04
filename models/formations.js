'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formations = sequelize.define('cvFormations', {
    idCompetences: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_formations'
  }
);

  Formations.associate = (db) => {
    db.cvFormations.belongsTo(db.cv);
  };

  return Formations;
};