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
      src: 'https://k42.kn3.net/CF42609C8.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'https://c1.staticflickr.com/3/2012/2135262359_1e8118f37f_b.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k42.kn3.net/D2F0370D6.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/9/8007/7474850234_6f220d249e_b.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/9/8195/8149375513_c2f37308d1_b.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'https://k38.kn3.net/AD92BA712.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k35.kn3.net/9ACD0AC56.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'https://c1.staticflickr.com/4/3561/3391067011_dfea55be7d_b.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k40.kn3.net/6A7A24F7C.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://k32.kn3.net/42C83EF0A.jpg',
      type: ImageType.PAINT
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/4/3816/19906000779_4b3cfb9629_b.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/4/3772/10426763795_1c0e6033c9_b.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k41.kn3.net/CF684A85A.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'https://k37.kn3.net/51254FE87.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k31.kn3.net/4BF6BBF0E.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/5/4009/4493453495_7b9c1f50c1_b.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'https://k34.kn3.net/4244FE50B.jpg',
      type: ImageType.PAINT
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'https://c1.staticflickr.com/7/6087/6056545730_4ef1302917_b.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k32.kn3.net/5C7060EC5.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://www.rosphoto.com/images/u/articles/1511/4-anastasiya-kostakova.jpg',
      type: ImageType.PHOTO
    }]
  }
];

dataUnited.questionText = {
  [gameType.GUESS_TWO_IMAGES]: 'Угадайте для каждого изображения фото или рисунок?',
  [gameType.GUESS_ONE_IMAGE]: 'Угадай, фото или рисунок?',
  [gameType.FIND_PAINT]: 'Найдите рисунок среди изображений'
};

dataUnited.statsData = {
  titleWin: 'Победа!',
  titleFail: 'FAIL',
  speedBonusTitle: 'Бонус за скорость:',
  lifeBonusTitle: 'Бонус за жизни:',
  fineTitle: 'Штраф за медлительность:'
};

export default dataUnited;
