'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define('cvFormation', {
    school: DataTypes.STRING,
    cvId: DataTypes.INTEGER,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  }, 
  {
    tableName: 'cv_formation'
  }
);
  Formation.associate = (db) => {
    db.cvFormation.belongsTo(db.cv);
  };
  return Formation;
};