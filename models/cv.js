'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cv = sequelize.define('cv', {
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    mail: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, 
  {
    tableName: 'cv'
  });
  Cv.associate = function(db) {
    db.cv.hasMany(db.cvExperience);
    db.cv.hasMany(db.cvFormation);
    db.cv.hasMany(db.cvCompetences);
  };
  return Cv;
};