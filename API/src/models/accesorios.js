const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("accesorio", {
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
    descripcion: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
  });
};
