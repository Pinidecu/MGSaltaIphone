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
const AccesoriosFactory = require("./accesorios");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
);

const Product = ProductsFactory(sequelize);
const Usedphone = UsedphonesFactory(sequelize);
const Colors = ColorsFactory(sequelize);
const Accesorios = AccesoriosFactory(sequelize);

//Relaciones
Product.belongsToMany(Colors, { through: "ProductColor" });
Colors.belongsToMany(Product, { through: "ProductColor" });

Usedphone.belongsToMany(Colors, { through: "UsedphoneColor" });
Colors.belongsToMany(Usedphone, { through: "UsedphoneColor" });

module.exports = {
  conn: sequelize,
  Product,
  Usedphone,
  Colors,
  Accesorios,
};
