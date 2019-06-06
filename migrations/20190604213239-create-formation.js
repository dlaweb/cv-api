'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cv_formation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      ecole: {
        type: Sequelize.STRING
      },
      idCompetences: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cv_competences',
          key: 'id'
        },
      },
      idCv: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cv',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cv_formation');
  }
};