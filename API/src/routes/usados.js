const { Router } = require("express");
const router = Router();
const usedPhoneController = require("../controllers/usedPhones");
const { Colors, Usedphone } = require("../models");
const { v4: uuidv4 } = require("uuid");


router.get("/", usedPhoneController.getAll);

router.get("/:id", usedPhoneController.getById);

//router.post("/", usedPhoneController.add);

router.post("/", async function (req, res) {
  try {
    const { name, price, image, obs, batery, colorsNames } = req.body;
    console.log("image: ", image);
    var newIphone = await Usedphone.create({
      name,
      price,
      image,
      obs,
      batery,
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

router.put("/:id", usedPhoneController.update);

router.delete("/:id", usedPhoneController.delete);

module.exports = router;
