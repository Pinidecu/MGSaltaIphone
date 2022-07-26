const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("product", {
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
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    imageForColor: {
      type: DataTypes.JSON(DataTypes.ARRAY(DataTypes.STRING)),
      allowNull: true,
      defaultValue: {},
    },
    description: {
      type: DataTypes.TEXT,
    },
    features: {
      type: DataTypes.TEXT,
    },
  });
};
