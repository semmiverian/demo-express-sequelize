'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    const Task = models.Task
    const Item = models.Item

    User.hasMany(Task, { foreignKey: 'userId'})
    User.belongsToMany(Item, {through: 'Purchase', foreignKey: 'userId'})
  };
  return User;
};