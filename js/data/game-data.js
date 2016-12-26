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

export const ImageType = {
  PAINT: 0,
  PHOTO: 1
};

export const statsType = {
  WRONG: 0,
  CORRECT: 1,
  SLOW: 2,
  FAST: 3,
  UNKNOWN: 4
};

export const prices = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

export const gameType = {
  GUESS_TWO_IMAGES: 0,
  GUESS_ONE_IMAGE: 1,
  FIND_PAINT: 2
};

dataUnited.questions = [
  {
    gameType: gameType.GUESS_TWO_IMAGES,
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
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
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
    gameType: gameType.GUESS_TWO_IMAGES,
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
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
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
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
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
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PAINT
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
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
  titleWin: 'Победа!',
  titleFail: 'FAIL',
  speedBonusTitle: 'Бонус за скорость:',
  lifeBonusTitle: 'Бонус за жизни:',
  fineTitle: 'Штраф за медлительность:'
};

export default dataUnited;
