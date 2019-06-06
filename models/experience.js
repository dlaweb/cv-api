'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('cvExperience', {
    date: DataTypes.DATE,
    entreprise: DataTypes.STRING,
    idExperiences: DataTypes.INTEGER
  },         
  {
    tableName: 'cv_experience'
  });
  Experience.associate = (db) => {
    db.cvExperience.belongsTo(db.cvExperiences);
};
  return Experience;
};