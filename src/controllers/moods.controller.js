'use strict';

const moodsService = require('../services/moods.service');

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
  const newMood = moodsService.addMoodService(moodBody);
  res.send(newMood); // 👁‍🗨
};

const updateMoodController = (req, res) => {};

const deleteMoodController = (req, res) => {};

const getMoodByCreatedatController = (req, res) => {
  const createdatParam = req.params.createdat;
  const chosenMood = moodsService.getMoodByCreatedatService(createdatParam);
  res.send(chosenMood);
};

module.exports = {
  getAllMoodsController,
  getTodayMoodsController,
  addMoodController,
  updateMoodController,
  deleteMoodController,
  getMoodByCreatedatController,
};
