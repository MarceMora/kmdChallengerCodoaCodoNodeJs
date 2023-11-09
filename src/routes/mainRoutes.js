const express = require ("express");
const router = express.Router();

router.get("/home",(_req, res) => res.send("Ruta para la Vista del Home"));
router.get("/contacto",(_req, res) => res.send("Ruta para la Vista de Contacto"));
router.get("/about",(_req, res) => res.send("Ruta para la Vista de Acerca de"));
router.get("/faqs",(_req, res) => res.send("Ruta para la Vista de Preguntas Frecuentes"));

module.exports = router;