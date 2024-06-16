const express = require("express");
const { listKelas } = require("../controllers/Kelas.Controller");
const router = express.Router();


router.get("/kelas", listKelas)

module.exports = {router}