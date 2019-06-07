'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('cvExperience', {
    date: DataTypes.DATE,
    entreprise: DataTypes.STRING,
    cvId: DataTypes.INTEGER
  },         
  {
    tableName: 'cv_experience'
  });
  Experience.associate = (db) => {
    db.cvExperience.belongsTo(db.cv);
};
  return Experience;
};