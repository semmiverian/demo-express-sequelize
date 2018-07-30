'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', 
      { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable("companies",
    {
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER(10)
      },
      companyName:{
        type:Sequelize.STRING(100),
        allowNull:false
      },
      email:{
        type:Sequelize.STRING(100)
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable("users");
  }
};
