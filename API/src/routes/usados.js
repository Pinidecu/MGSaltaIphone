const { Router } = require("express");
const router = Router();

const usedPhoneController = require("../controllers/usedPhones");

router.get("/", usedPhoneController.getAll);

router.get("/:id", usedPhoneController.getById);

router.post("/", usedPhoneController.add);

router.put("/:id", usedPhoneController.update);

router.delete("/:id", usedPhoneController.delete);

module.exports = router;
