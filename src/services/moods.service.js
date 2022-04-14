'use strict';

const { formatMood, formatMoods } = require('../util/formatMoods');
const sortMoods = require('../util/sortMoods');
const getDateToday = require('../util/getDateToday');

// mood_id -> 0 - 6 (no mood, 1 - 5, love ❤) (required)
// icon: input by user (set by mood_id if no input) (required)
// text: input by user (optional)
// dateTime: input by user; format: 'YYYY-MM-DDThh:mm:ss' (date created if no input) (required)
// createdat: date/time created; format: 'YYYYMMDDhhmmss'; used as primary-key/id

// 📌 auto-generated (example):

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
    createdat: '00000000000000',
  },
  {
    mood_id: 1,
    icon: '',
    text: 'text mood 1',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000001',
  },
  {
    mood_id: 2,
    icon: '',
    text: 'text mood 2',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000002',
  },
  {
    mood_id: 3,
    icon: '',
    text: 'text mood 3',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000003',
  },
  {
    mood_id: 4,
    icon: '',
    text: 'text mood 4',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000004',
  },
  {
    mood_id: 5,
    icon: '',
    text: 'text mood 5',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000005',
  },
  {
    mood_id: 6,
    icon: '',
    text: 'text mood 6',
    dateTime: '2022-04-23T00:00:00',
    createdat: '00000000000006',
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
  return mood; // 👁‍🗨
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

// const getMoodByCreatedatService = (createdat) => {
//   const mood = moods.find((mood) => mood.createdat === createdat);
//   formatMood(mood);
//   return mood;
// };

module.exports = {
  getAllMoodsService,
  getTodayMoodsService,
  addMoodService,
  updateMoodService,
  deleteMoodService,
  // getMoodByCreatedatService,
};
