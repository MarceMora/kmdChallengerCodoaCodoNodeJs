const express = require ("express");
const router = express.Router();

router.get("/login",(_req,res) => res.send("Ruta para la vista Ingresar datos de Login"));
router.post("/login",(_req, res) => res.send("Ruta para la vista respuesta datos de Login"));
router.get("/register",(_req,res) => res.send("Ruta para la vista Crear Cuenta o Registrarse"));
router.post("/register",(_req, res) => res.send("Ruta para la vista Respuesta a datos del Registro"));

module.exports = router;
