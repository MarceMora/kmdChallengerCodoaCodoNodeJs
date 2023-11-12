const express = require ("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.get("/login", authControllers.loginSign);
router.post("/login", authControllers.loginIn);
router.get("/register", authControllers.registerIn);
router.post("/register", authControllers.registerData);

module.exports = router;
