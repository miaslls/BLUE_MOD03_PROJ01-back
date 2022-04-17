'use strict';

const express = require('express');
const router = express.Router();

const moodsController = require('../controllers/moods.controller');

router.get('/all', moodsController.getAllMoodsController);
router.get('/today', moodsController.getTodayMoodsController);

// ❗❗❗ VINICIUS: como conversamos em aula, essa é a rota que faz a leitura por ID (ID: createdat (informação única, mood_id se refere ao tipo de mood.))

router.get('/:createdat', moodsController.getMoodByCreatedatController);

router.post('/add', moodsController.addMoodController);
router.put('/update/:createdat', moodsController.updateMoodController);
router.delete('/delete/:createdat', moodsController.deleteMoodController);

module.exports = router;
