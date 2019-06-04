'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competences = sequelize.define('cvCompetences', {
    idExperience: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_competences'
  }
);
  Competences.associate = (db) => {
    db.cvCompetences.belongsTo(db.cv);
    db.cvCompetences.hasMany(db.langage);
  };
  return Competences;
};