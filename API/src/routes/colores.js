const { Router } = require("express");
const router = Router();
const colorController = require("../controllers/colors");

router.get("/", colorController.getAll);

router.get("/:id", colorController.getById);

router.post("/", colorController.add);

router.put("/:id", colorController.update);

router.delete("/:id", colorController.delete);

module.exports = router;
