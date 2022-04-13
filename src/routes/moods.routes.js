'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('mood/all', moodsController.findMoodsController);
router.get('mood/:createdat', moodsController.findMoodByCreatedatController);

module.exports = router;
