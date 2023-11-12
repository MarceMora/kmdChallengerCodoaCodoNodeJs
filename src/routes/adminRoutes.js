const express = require ("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.createItem);
router.post("/create", adminControllers.createCarry);
router.get("/edit/:id", adminControllers.editItem);
router.put("/edit/:id", adminControllers.editModify);
router.delete("/delete/:id", adminControllers.deleteItem);

module.exports = router;
