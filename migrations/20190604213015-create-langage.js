'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cv_langage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      langage: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      cvId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cv',
          key: 'id'
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cv_langage');
  }
};