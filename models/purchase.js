'use strict';
module.exports = (sequelize, DataTypes) => {
  var Purchase = sequelize.define('Purchase', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  Purchase.associate = function(models) {
    // associations can be defined here
  };
  return Purchase;
};