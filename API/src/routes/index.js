/*
Vamos a traer las otras rutas
Mi ruta de produtos y mesas

*/
const { Router } = require("express");

const ProductosRoutes = require("./productos");
const UsadosRoutes = require("./usados");
const DolarRoutes = require("./dolar");
const ColoresRoutes = require("./colores");

const router = Router();

router.use("/productos", ProductosRoutes);
router.use("/usados", UsadosRoutes);
router.use("/dolar", DolarRoutes);
router.use("/colores", ColoresRoutes);

module.exports = router;
