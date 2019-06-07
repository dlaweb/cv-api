'use strict';
module.exports = (sequelize, DataTypes) => {
  const Langage = sequelize.define('cvLangage', {
    langage: DataTypes.STRING,
    level: DataTypes.INTEGER,
    cvId: DataTypes.INTEGER
  }, 
  {
    tableName: 'cv_langage'
  }
);
  Langage.associate = (db) => {
    db.cvLangage.belongsTo(db.cv)
}
  return Langage;
};