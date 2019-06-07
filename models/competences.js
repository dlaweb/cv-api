'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competences = sequelize.define('cvCompetences', {
    name:  DataTypes.STRING,
    level: DataTypes.INTEGER,
    cvExperienceId: DataTypes.INTEGER,
    cvFormationId: DataTypes.INTEGER,
    cvId: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_competences'
  }
);
  Competences.associate = (db) => {
    db.cvCompetences.belongsTo(db.cv);
  };
  return Competences;
};