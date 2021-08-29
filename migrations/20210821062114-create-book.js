'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Books');
  }
};

// Pipeline Jenkins, github, bamboo
// import & export -> Babel converter  -> nodejs
// checkout -> npm install -> babel transpile -> npm test -> npm audit -> npm test:integration -> build (.zip | docker | .jar | .apk | .pkg)
// deployment dev  -> db migrations (sequelize db:migrate) -> deploy -> e2e tests on the dev 
// deployment stage -> db migrations -> deploy -> e2e tests on the stage
// deployment prod -> approval -> db migrations -> deploy -> e2e tests