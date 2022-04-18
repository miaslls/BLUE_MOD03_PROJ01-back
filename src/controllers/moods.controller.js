'use strict';

const moodsService = require('../services/moods.service');
const validateInput = require('../util/validateInput');

const getAllMoodsController = (req, res) => {
  const allMoods = moodsService.getAllMoodsService();
  res.send(allMoods);
};

const getTodayMoodsController = (req, res) => {
  const todayMoods = moodsService.getTodayMoodsService();
  res.send(todayMoods);
};

const addMoodController = (req, res) => {
  const moodBody = req.body;
  const validMood = validateInput(moodBody);
  if (!validMood) {
    return res.status(400).send({ message: 'mood INVALID' });
  }

  const newMood = moodsService.addMoodService(moodBody);
  res.status(201).send({ message: 'mood CREATED' });
};

const getMoodByCreatedatController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED' });
  }

  const chosenMood = moodsService.getMoodByCreatedatService(createdatParam);
  if (!chosenMood) {
    return res.status(404).send({ message: 'mood NOT FOUND' });
  }

  res.status(200).send(chosenMood);
};

const updateMoodController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED' });
  }

  const moodUpdate = req.body;
  const validMood = validateInput(moodUpdate);
  if (!validMood) {
    return res.status(400).send({ message: 'mood INVALID' });
  }

  const updatedMood = moodsService.updateMoodService(createdatParam, moodUpdate);
  if (!updatedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND' });
  }
  res.status(200).send({ message: 'mood UPDATED' });
};

const deleteMoodController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED' });
  }

  const deletedMood = moodsService.deleteMoodService(createdatParam);
  if (!deletedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND' });
  }
  res.status(200).send({ message: 'mood DESTROYED' });
};

module.exports = {
  getAllMoodsController,
  getTodayMoodsController,
  addMoodController,
  getMoodByCreatedatController,
  updateMoodController,
  deleteMoodController,
};
