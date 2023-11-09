const express = require ("express");
const router = express.Router();
const shopControllers = require("../controllers/shopControllers");

router.get("/", shopControllers.shop);
router.get("/contacto", shopControllers.contacto);
router.get("/item/:id", shopControllers.item,id);
router.post("/item/:id/add", shopControllers.item,id,add);
router.get("/carrito", shopControllers.carrito);
router.post("/carrito", shopControllers.carrito);

module.exports = router;