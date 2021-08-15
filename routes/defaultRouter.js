const express = require('express');
const defaultCtrl = require('../controllers/defaultCtrl');
const healthCtrl = require('../controllers/healthCtrl');

const router = express.Router();

router.get('/', defaultCtrl);
router.get('/health', healthCtrl);

module.exports = router;