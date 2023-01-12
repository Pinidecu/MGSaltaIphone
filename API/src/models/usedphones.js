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
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    batery: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 100 },
    },
    obs: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
  });
};
