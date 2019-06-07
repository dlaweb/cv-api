'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cv_experience', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      cvId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cv',
          key: 'id'
        },
      },
      from: {
        allowNull: false,
        type: Sequelize.DATE
      },
      to: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('cv_experience');
  }
};