'use Strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/CorretorController')

router.get('/get/', controller.get);
router.post('/post/', controller.post);
router.put('/put/:id', controller.put);
router.delete('/delete/:id', controller.delete);

module.exports = router;