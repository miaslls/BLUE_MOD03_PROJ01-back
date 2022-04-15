'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('/all', moodsController.getAllMoodsController);
router.get('/today', moodsController.getTodayMoodsController);

// ❗❗❗ write comment for VINICIUS
// router.get('/:createdat', moodsController.getMoodByCreatedatController);

router.post('/add', moodsController.addMoodController);
router.put('/update/:createdat', moodsController.updateMoodController);
router.delete('/delete/:createdat', moodsController.deleteMoodController);

module.exports = router;
