const express = require ("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.create);
router.post("/create", adminControllers.create);
router.get("/edit/:id", adminControllers.edit,id);
router.put("/edit/:id", adminControllers.edit,id);
router.delete("/delete/:id", adminControllers.delete,id);

module.exports = router;
