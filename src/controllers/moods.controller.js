'use strict';

const moodsService = require('../services/moods.service');

const findMoodsController = (req, res) => {
  const allMoods = moodsService.findMoodsService();
  res.send(allMoods);
};

const findMoodByCreatedatController = (req, res) => {
  const createdatParam = req.params.createdat;
  const chosenMood = moodsService.findMoodByCreatedatService(createdatParam);
  res.send(chosenMood);
};

// const findMoodByDateController = (req, res) => {
//   const dateParam = req.params.date;
//   const chosenMood = moodsService.findMoodByDateService(dateParam);
//   res.send(chosenMood);
// };

module.exports = {
  findMoodsController,
  findMoodByCreatedatController,
  //   findMoodByDateController,
};
