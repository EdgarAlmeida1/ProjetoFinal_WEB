'use Strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/RelatorioController')

router.post('/faturamento/', controller.getFaturamento);
router.post('/salarioC/', controller.getSalarioCorretor);
router.post('/lucro/', controller.getLucro);
router.post('/imoveis/', controller.getImoveis);
router.post('/encalhados/', controller.getEncalhados);
router.post('/corretormes/', controller.getCorretorMes);
router.post('/faturamentoC/', controller.getFaturamentoCorretores);

module.exports = router;