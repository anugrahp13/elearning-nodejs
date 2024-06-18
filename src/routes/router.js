const express = require("express");
const router = express.Router();
const { listKelas } = require("../controllers/kelas.controller");
const { listMataPelajaran } = require("../controllers/matapelajaran.contoller");

//get data
router.get("/kelas", listKelas);
router.get("/mata-pelajaran", listMataPelajaran);


module.exports = {router}