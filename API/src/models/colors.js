const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("color", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hexa: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "#22142b",
    },
  });
};
