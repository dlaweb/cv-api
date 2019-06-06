'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cv = sequelize.define('cv', {
    titre: DataTypes.STRING,
    description: DataTypes.TEXT
  }, 
  {
    tableName: 'cv'
  });
  Cv.associate = function(db) {
    db.cv.hasMany(db.cvExperience);
    db.cv.hasMany(db.cvFormations);
    db.cv.hasMany(db.cvCompetences);
  };
  return Cv;
};