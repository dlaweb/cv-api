'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cv_competences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idExperience: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cv_experience',
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
    return queryInterface.dropTable('cv_competences');
  }
};