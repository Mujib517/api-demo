'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

// Pipeline Jenkins, github, bamboo
// import & export -> Babel converter  -> nodejs
// checkout -> npm install -> babel transpile -> npm test -> npm audit -> npm test:integration -> build (.zip | docker | .jar | .apk | .pkg)
// deployment dev  -> db migrations (sequelize db:migrate) -> deploy -> e2e tests on the dev 
// deployment stage -> db migrations -> deploy -> e2e tests on the stage
// deployment prod -> approval -> db migrations -> deploy -> e2e tests