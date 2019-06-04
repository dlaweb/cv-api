'use strict';
module.exports = (sequelize, DataTypes) => {
  const Langage = sequelize.define('cvLangage', {
    langage: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_langage'
  }
);
  Langage.associate = (db) => {
    db.cvLangage.belongsTo(db.cvCompetences)
}
  return Langage;
};