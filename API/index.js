// VAMOS A necesitar nodemon, express, sequelize, pg, morgan
//npm i express sequelize pg morgan

const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const errorHandler = require("./src/utils/middlewares/errorHandles");
const setHeaders = require("./src/utils/middlewares/setHeaders");
const { conn, Colors, Product } = require("./src/models");
const { PORT } = require("./src/utils/config");
const { v4: uuidv4 } = require("uuid");
const { iphones } = require("./src/iphones");

const app = express();

// Setear nuestros headers
app.use(express.urlencoded({ extend: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev")); //Guia de lo que esta pasando
app.use(setHeaders);

// Setear rutas
app.use("/", routes);

//Middlewar de control de errores
app.use(errorHandler);

// Server.listen
conn.sync({ force: false }).then(() => {
  console.log("Base de datos conectada");
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
  });

  // creando colores
  let colors = [
    { name: "Blanco", hexa: "#FFFFFF" },
    { name: "Negro", hexa: "#000000" },
    { name: "Rojo", hexa: "#FF0000" },
    { name: "Azul", hexa: "#1B00FF" },
    { name: "Verde", hexa: "#09CD00" },
    { name: "Roza", hexa: "#FFB9EB" },
    { name: "Celeste", hexa: "#B7D3FF" },
    { name: "Naranja", hexa: "#FFECB7" },
    { name: "Gris", hexa: "#C4C4C4" },
  ];

  colors.forEach((color) => {
    Colors.findOrCreate({
      where: { name: color.name, hexa: color.hexa },
      defaults: { id: uuidv4() },
    });
  });

  /* iphones.forEach(async (iphone) => {
    console.log("iphone.imageForColor: ", iphone.imageForColor);
    let newIphone = await Product.findOrCreate({
      where: {
        name: iphone.name,
        price: iphone.price,
        image: iphone.image,
        imageForColor: { Rojo: ["adsas"] },
        description: iphone.description,
        features: iphone.features,
      },
      defaults: { id: uuidv4() },
    });
    const colors1 = await Colors.findAll({
      where: { name: iphone.colors },
    });
    await newIphone[0].setColors(colors1);
  }); */
});
