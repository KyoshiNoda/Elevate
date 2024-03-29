const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.post("/google", AuthController.googleSignIn);
module.exports = router;
