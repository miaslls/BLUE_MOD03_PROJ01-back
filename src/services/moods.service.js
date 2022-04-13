'use strict';

const moods = [
  {
    mood_id: 0,
    icon: '',
    text: 'text mood 0',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 1,
    icon: '',
    text: 'text mood 1',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 2,
    icon: '',
    text: 'text mood 2',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 3,
    icon: '',
    text: 'text mood 3',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 4,
    icon: '',
    text: 'text mood 4',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 5,
    icon: '',
    text: 'text mood 5',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
  {
    mood_id: 6,
    icon: '',
    text: 'text mood 6',
    date: '0000-00-00',
    time: 'T00:00:00',
    timestamp: 00000000000000,
    createdat: '0000-00-00T00:00:00',
  },
];

const findMoodsService = () => {
  return moods;
};

const findMoodByCreatedatService = (createdat) => {
  return moods.find((mood) => mood.createdat === createdat);
};

// const findMoodByDateService = (date) => {
//   return moods.find((mood) => mood.date === date);
// };

module.exports = {
  findMoodsService,
  findMoodByCreatedatService,
  findMoodByDateService,
};
