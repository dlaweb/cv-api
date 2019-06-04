'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define('cvFormation', {
    date: DataTypes.DATE,
    ecole: DataTypes.STRING
  }, 
  {
    tableName: 'cv_formation'
  }
);
  Formation.associate = (db) => {
    db.cvFormation.belongsTo(db.cvFormations);
  };
  return Formation;
};