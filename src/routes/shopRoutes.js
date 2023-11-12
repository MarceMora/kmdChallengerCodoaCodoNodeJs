const express = require ("express");
const router = express.Router();
const shopControllers = require ("../controllers/shopControllers");

router.get("/", shopControllers.shop);
router.get("/contacto", shopControllers.contacto);
router.get("/item/:id", shopControllers.itemGet);
router.post("/item/:id/add", shopControllers.itemAdd);
router.get("/carrito", shopControllers.carritoView);
router.post("/carrito", shopControllers.carritoCheck);

module.exports = router;