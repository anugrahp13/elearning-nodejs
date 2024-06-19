const express = require("express");
const { validRegister, validatorLogin } = require("../middlewares/validator");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", validRegister, register);
router.post("/login", validatorLogin, login);

module.exports = {router}