/**
 * Created by yulia on 07.12.2016.
 */
const dataUnited = {};

dataUnited.introData = {
  text: ' Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

dataUnited.greetingData = {
  logo: {
    src: 'img/logo_big.png',
    alt: 'Pixel Hunter'
  },
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

dataUnited.rulesData = {
  title: 'Правила',
  text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`,
  placeholder: 'Ваше Имя',
  buttonText: 'Go!'
};

dataUnited.headerData = {
  full_lives: 2,
  total_lives: 3
};

dataUnited.footerData = {
  quest_count: 10,
  passed: [
    'WR', 'SL', 'FS', 'CR'
  ]
};

const ImageType = {
  PAINT: 0,
  PHOTO: 1
};

dataUnited.questions = [
  {
    gameType: 1,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/468x458',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://placehold.it/468x458',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: 2,
    task: {
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }
  },
  {
    gameType: 3,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: 1,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/468x458',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://placehold.it/468x458',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: 2,
    task: {
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }
  },
  {
    gameType: 3,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: 1,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/468x458',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://placehold.it/468x458',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: 2,
    task: {
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }
  },
  {
    gameType: 3,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: 1,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/468x458',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://placehold.it/468x458',
      type: ImageType.PHOTO
    }]
  }
];

dataUnited.questionText = [
  'Угадайте для каждого изображения фото или рисунок?',
  'Угадай, фото или рисунок?',
  'Найдите рисунок среди изображений'
];

dataUnited.statsData = {
  title: 'Победа!',
  total_result: '950',
  games: [
    {
      number: 1,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'UN', 'FS', 'UN'
      ],
      base_points: 100,
      base_total: 900,
      bonuses: {
        fast: {
          title: 'Бонус за скорость:',
          count: 1,
          points: 50,
          total: 50
        },
        life: {
          title: 'Бонус за жизни:',
          count: 2,
          points: 50,
          total: 100
        },
        slow: {
          title: 'Штраф за медлительность:',
          count: 2,
          points: 50,
          total: -100
        }
      }
    },
    {
      number: 2,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'WR', 'FS', 'WR'
      ],
      total: '',
      final: 'fail'
    },
    {
      number: 3,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'UN', 'FS', 'UN'
      ],
      base_points: 100,
      base_total: 900,
      bonuses: {
        life: {
          title: 'Бонус за жизни:',
          count: 2,
          points: 50,
          total: 100
        }
      }
    }
  ]
};

export default dataUnited;
