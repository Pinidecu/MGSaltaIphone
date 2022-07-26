//Inicializamos sequelize y hacemos las relaciones

const { Sequelize } = require("sequelize");
const {
  dbUser,
  dbName,
  dbPort,
  dbHost,
  dbPassword,
} = require("../utils/config/index");

const ProductsFactory = require("./products");
const UsedphonesFactory = require("./usedphones");
const ColorsFactory = require("./colors");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
);

const Product = ProductsFactory(sequelize);
const Usedphone = UsedphonesFactory(sequelize);
const Colors = ColorsFactory(sequelize);

//Relaciones
Product.belongsToMany(Colors, { through: "ProductColor" });
Colors.belongsToMany(Product, { through: "ProductColor" });

module.exports = {
  conn: sequelize,
  Product,
  Usedphone,
  Colors,
};
