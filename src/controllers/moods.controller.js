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
    return res.status(400).send({ message: 'mood INVALID', icon: '' });
  }

  const newMood = moodsService.addMoodService(moodBody);
  res.status(201).send({ message: 'mood CREATED', icon: '' });
};

const getMoodByCreatedatController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED', icon: '' });
  }

  const chosenMood = moodsService.getMoodByCreatedatService(createdatParam);
  if (!chosenMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }

  res.status(200).send(chosenMood);
};

const updateMoodController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED', icon: '' });
  }

  const moodUpdate = req.body;
  const validMood = validateInput(moodUpdate);
  if (!validMood) {
    return res.status(400).send({ message: 'mood INVALID', icon: '' });
  }

  const updatedMood = moodsService.updateMoodService(createdatParam, moodUpdate);
  if (!updatedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }
  res.status(200).send({ message: 'mood UPDATED', icon: '' });
};

const deleteMoodController = (req, res) => {
  const createdatParam = req.params.createdat;
  if (!createdatParam) {
    return res.status(400).send({ message: 'mood NOT DEFINED', icon: '' });
  }

  const deletedMood = moodsService.deleteMoodService(createdatParam);
  if (!deletedMood) {
    return res.status(404).send({ message: 'mood NOT FOUND', icon: '' });
  }
  res.status(200).send({ message: 'mood DESTROYED', icon: '' });
};

module.exports = {
  getAllMoodsController,
  getTodayMoodsController,
  addMoodController,
  getMoodByCreatedatController,
  updateMoodController,
  deleteMoodController,
};
