//Vamos a interactuar con el entorno

require("dotenv").config();

module.exports = {
  dbUser: process.env.DB_USER || "postgres",
  dbName: process.env.DB_NAME || "mgsaltaiphone",
  dbPort: process.env.DB_PORT || "5432",
  dbHost: process.env.DB_HOST || "localhost",
  host: process.env.HOST || "localhost",
  dbPassword: process.env.DB_PASSWORD || "edc26495",
  PORT: process.env.PORT || "3001",
};
