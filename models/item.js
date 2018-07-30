'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    const User = models.User
    Item.belongsToMany(User, { through: 'Purchase', foreignKey: 'itemId'})
  };
  return Item;
};