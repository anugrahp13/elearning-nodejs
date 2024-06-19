const express = require("express");
const router = express.Router();
const { listKelas } = require("../controllers/kelas.controller");
const { listMataPelajaran } = require("../controllers/matapelajaran.contoller");
const { listBab } = require("../controllers/bab.controller");
const { listSubBab } = require("../controllers/subbab.controller");
const { listMaterial } = require("../controllers/material.controller");

//get data
router.get("/kelas", listKelas);
router.get("/matapelajaran", listMataPelajaran);
router.get("/bab", listBab);
router.get("/subbab", listSubBab);
router.get("/material", listMaterial);


module.exports = {router}