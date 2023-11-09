const express = require ("express");
const router = express.Router();

router.get("/",(_req, res) => res.send("Ruta para la Vista de Administrador"));
router.get("/create",(_req,res) => res.send("Ruta para la vista Crear Producto"));
router.post("/create",(_req, res) => res.send("Ruta para la vista Cargar Producto"));
router.get("/edit/:id",(_req,res) => res.send("Ruta para la Vista encontrar y Editar Producto por su Id "));
router.put("/edit/:id",(_req,res) => res.send("Ruta para la Vista encontrar, editar y modificar producto por su Id"));
router.delete("/delete/:id",(_req,res) => res.send("Ruta para la Vista encontrar producto por su Id y borrarlo o eliminarlo"));

module.exports = router;
