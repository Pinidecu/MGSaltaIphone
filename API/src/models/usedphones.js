const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("usedphone", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    batery: {
      type: DataTypes.INTEGER,
    },
    obs: {
      type: DataTypes.STRING,
    },
  });
};
