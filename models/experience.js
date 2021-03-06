'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('cvExperience', {
    date: DataTypes.DATE,
    company: DataTypes.STRING,
    cvId: DataTypes.INTEGER,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  },         
  {
    tableName: 'cv_experience'
  });
  Experience.associate = (db) => {
    db.cvExperience.belongsTo(db.cv);
};
  return Experience;
};