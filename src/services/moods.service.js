'use strict';

const { formatMood, formatMoods } = require('../util/formatMoods');
const sortMoods = require('../util/sortMoods');
const getDateToday = require('../util/getDateToday');

// ℹ DATA:

// mood_id -> 0 - 6 (0 = no mood; 1 - 5; 6 = love ❤) (required)
// icon: input by user (set by mood_id if no input) (required)
// text: input by user (optional)
// dateTime: input by user; format: 'YYYY-MM-DDThh:mm:ss' (date created if no input) (required)
// createdat: date/time created; format: 'YYYYMMDDhhmmss'; used as primary-key/id

// auto-generated (example):

// formattedDateTitle: 'april 23, 2022',
// formattedDateBody: '23.04.2022',
// formattedTime: '00:00:00am',
// timestamp: 20220423000000

const moods = [
  {
    mood_id: 0,
    icon: '',
    text: 'text mood 0',
    dateTime: '2022-04-14T00:00:00',
    createdat: '20001010053245',
  },
  {
    mood_id: 1,
    icon: '',
    text: 'text mood 1',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053246',
  },
  {
    mood_id: 2,
    icon: '',
    text: 'text mood 2',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053247',
  },
  {
    mood_id: 3,
    icon: '',
    text: 'text mood 3',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053248',
  },
  {
    mood_id: 4,
    icon: '',
    text: 'text mood 4',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053249',
  },
  {
    mood_id: 5,
    icon: '',
    text: 'text mood 5',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053250',
  },
  {
    mood_id: 6,
    icon: '',
    text: 'text mood 6',
    dateTime: '2022-04-23T00:00:00',
    createdat: '20001010053252',
  },
];

const getAllMoodsService = () => {
  formatMoods(moods);
  sortMoods(moods);
  return moods;
};

const getTodayMoodsService = () => {
  const dateToday = getDateToday();
  const todayMoods = [];

  formatMoods(moods);

  for (let mood of moods) {
    if (mood.formattedDateBody === dateToday) {
      todayMoods.push(mood);
    }
  }

  sortMoods(todayMoods);

  return todayMoods;
};

const addMoodService = (mood) => {
  moods.push(mood);
  sortMoods(moods);
  return mood; // 👁‍🗨
};

const getMoodByCreatedatService = (createdat) => {
  const mood = moods.find((mood) => mood.createdat === createdat);
  formatMood(mood);
  return mood;
};

const updateMoodService = (createdat, moodBody) => {
  const moodIndex = moods.findIndex((mood) => mood.createdat === createdat);
  moods[moodIndex] = moodBody;
  return moodBody; // 👁‍🗨
};

const deleteMoodService = (createdat) => {
  const moodIndex = moods.findIndex((mood) => mood.createdat === createdat);
  moods.splice(moodIndex, 1); // 👁‍🗨
  // return moods.splice(moodIndex, 1);
};

module.exports = {
  getAllMoodsService,
  getTodayMoodsService,
  addMoodService,
  getMoodByCreatedatService,
  updateMoodService,
  deleteMoodService,
};
