'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    dueDate: DataTypes.DATE
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};