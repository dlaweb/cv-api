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
    db.cv.hasMany(db.experiences);
    db.cv.hasMany(db.formations);
    db.cv.hasMany(db.competences);
  };
  return Cv;
};