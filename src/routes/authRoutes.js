const express = require ("express");
const router = express.Router();
const authControllers = require("../controllers/authCotrollers");

router.get("/login", authControllers.auth,login);
router.post("/login", authControllers.auth,login);
router.get("/register", authControllers.auth,register);
router.post("/register", authControllers.auth,register);

module.exports = router;
