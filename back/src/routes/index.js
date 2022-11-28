const express = require('express');
const router = express.Router();

const profi = require("../controllers/profissionaisController");
const consultas = require("../controllers/consultasController");
const tratamento = require("../controllers/tratamentosController");

router.get("/profissionais/read/", profi.readPro);

router.get("/consultas/read/", consultas.readCon);

router.post("/tratamentos/create/", tratamento.createTra);
router.get("/tratamentos/read/", tratamento.readTra);
router.get("/tratamentos/profissional/:id", tratamento.readTraProf);
router.put("/tratamentos/update/", tratamento.upDateTra);
router.delete("/tratamentos/delete/", tratamento.deleteTra);

module.exports = router;