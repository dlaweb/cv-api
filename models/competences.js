'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competences = sequelize.define('cvCompetences', {
    idExperience: DataTypes.INTEGER,
    idCv: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_competences'
  }
);
  Competences.associate = (db) => {
    db.cvCompetences.belongsTo(db.cv);
    db.cvCompetences.hasMany(db.cvLangage);
  };
  return Competences;
};