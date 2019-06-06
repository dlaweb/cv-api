'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experiences = sequelize.define('cvExperiences', {
    name: DataTypes.STRING,
    idCv: DataTypes.INTEGER
  },
  {
    tableName: 'cv_experiences'
  });
  Experiences.associate = function(db) {
    db.cvExperiences.belongsTo(db.cv);
    db.cvExperiences.hasMany(db.cvExperience)
  };
  return Experiences;
};