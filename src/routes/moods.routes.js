'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('/all', moodsController.findMoodsController);
router.get('/:createdat', moodsController.findMoodByCreatedatController);

module.exports = router;
