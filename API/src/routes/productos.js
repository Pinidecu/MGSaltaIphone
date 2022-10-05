const { Router } = require("express");
const router = Router();
const productController = require("../controllers/products");
const { Colors, Product } = require("../models");
const { v4: uuidv4 } = require("uuid");

/* router.get("/", productController.getAll);
 */
router.get("/", async function (req, res) {
  try {
    const iphones = await Product.findAll({
      include: Colors,
    });
    res.json(iphones);
  } catch (error) {
    res.status(404).send("No se encontraron iphones");
  }
});

router.get("/:id", productController.getById);

/* router.post("/", productController.add);
 */

router.post("/", async function (req, res) {
  try {
    const {
      name,
      price,
      image,
      imageForColor,
      description,
      features,
      colorsNames,
    } = req.body;
    console.log("image", image);
    var newIphone = await Product.create({
      name,
      price,
      image,
      imageForColor,
      description,
      features,
      imageForColor,
      id: uuidv4(),
    });
    const colors = await Colors.findAll({
      where: { name: colorsNames },
    });
    await newIphone.setColors(colors);
    return res.json(newIphone);
  } catch (error) {
    console.log("Error:", error);
    res.status(404).send("No se creo el iPhone");
  }
});

router.put("/:id", productController.update);

router.put("/colores/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const colores = req.body.colores;
    console.log("Colores: ", colores);
    const body = req.body;
    console.log("body: ", body);
    var newIphone = await Product.update(body, {
      where: {
        id,
      },
      returning: true,
    });
    const colors = await Colors.findAll({
      where: { name: colores },
    });
    await newIphone[1][0].setColors(colors);
    console.log("New Iphone: ", newIphone);
    return res.json(newIphone);
  } catch (error) {
    console.log("Error:", error);
    res.status(404).send("No se pudo actualizar el iPhone");
  }
});

router.put("/agregarcolores/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const colores = req.body.colores;
    const body = req.body;
    console.log("Colores: ", colores);
    console.log("Body: ", body);
    var newIphone = await Product.update(body, {
      where: {
        id,
      },
      returning: true,
    });
    const colors = await Colors.findAll({
      where: { name: colores },
    });
    await newIphone[1][0].setColors(colors);
    return res.json(newIphone);
  } catch (error) {
    console.log("Error:", error);
    res.status(404).send("No se pudo actualizar el iPhone");
  }
});

router.delete("/:id", productController.delete);

module.exports = router;
