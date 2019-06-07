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
      name: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      cvExperienceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cv_experience',
          key: 'id'
        },
      },
      cvFormationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cv_formation',
          key: 'id'
        },
      },
      cvId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cv',
          key: 'id'
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cv_competences');
  }
};