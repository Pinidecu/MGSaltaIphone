const { Router } = require("express");
const router = Router();
const accesorioController = require("../controllers/accesorios");


router.get("/", accesorioController.getAll);

router.get("/:id", accesorioController.getById);

router.post("/", accesorioController.add);

router.put("/:id", accesorioController.update);

router.delete("/:id", accesorioController.delete);

module.exports = router;
