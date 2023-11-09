const express = require ("express");
const router = express.Router();

router.get("/",(_req, res) => res.send("Ruta para la Vista de la Tienda"));
router.get("/contacto",(_req,res) => res.send ("Ruta para la Vista del formulario de Contacto"));
router.get("/item/:id",(_req,res) => res.send("Ruta para encontrar y obtener un producto por numero de identificacion"));
router.post("/item/:id/add",(_req, res) => res.send("Ruta para encontrar y agrgar un producto al carrito de compras"));
router.get("/carrito",(_req,res) => res.send("Ruta para la Vista Carrito"));
router.post("/carrito",(_req,res) => res.send("Ruta para ir a Chequear Carrito de Compras"));

module.exports = router;