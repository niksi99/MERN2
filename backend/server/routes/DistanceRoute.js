const express = require('express');
const router = express.Router();

const DistanceController = require('../controllers/DistanceController')

router.post('/addDistances', DistanceController.CreateDistances);

router.get('/getAllDistances', DistanceController.GetAllDistances);
module.exports = router