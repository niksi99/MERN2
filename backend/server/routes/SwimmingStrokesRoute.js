const express = require('express');
const router = express.Router();

const SwimmingStrokesControllers = require('../controllers/SwimmingStrokesControllers')

router.post("/", SwimmingStrokesControllers.CreateStrokesWithDsitances)

router.put("/", SwimmingStrokesControllers.StrokesOfSwimmer);

module.exports = router