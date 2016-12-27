/**
 * Created by yulia on 08.12.2016.
 */
import GameHeaderView from './components/game-header';
import AnswerStatsView from './components/answer-stats';
import dataUnited from '../data/game-data';
import {ImageType, gameType} from '../data/game-data';
import FirstTypeGameView from './game-1';
import SecondTypeGame from './game-2';
import ThirdTypeGameView from './game-3';
import createStats from './stats';
import select from '../select';
import state from '../data/state';
import timer from '../templates/components/timer';

const goToNextScreen = () => {
  let round = state.currentRound;
  const current = round.currentTask;
  if (round.lives < 0 || current >= 10) {
    state.countTotal();
    timer.stop();
    select(createStats());
  } else {
    timer.stop();
    select(renderGameScreen());
  }
};

const guessTwoImagesCallback = (e) => {
  e.preventDefault();
  const gameAnswers = document.querySelectorAll('.game__answer');
  let firstAnswer = null;
  for (let i = 0; i < gameAnswers.length; i++) {
    if (gameAnswers[i].classList.contains('checked')) {
      firstAnswer = gameAnswers[i];
    }
  }
  if (firstAnswer) {
    let firstInput = firstAnswer.querySelector('input');
    let currentInput = e.currentTarget.querySelector('input');
    if (firstInput.name === currentInput.name) {
      firstAnswer.classList.remove('checked');
      firstInput.checked = false;
      e.currentTarget.classList.add('checked');
      currentInput.checked = true;
    } else {
      const secondAnswer = e.currentTarget.querySelector('input').value;
      let answer;
      answer = (firstInput.name === 'question1') ? [firstInput.value, secondAnswer] : [secondAnswer, firstInput.value];
      answer = answer.map((item) => {
        if (item === 'photo') {
          return ImageType.PHOTO;
        } else if (item === 'paint') {
          return ImageType.PAINT;
        } else {
          return null;
        }
      });
      state.setResult(answer, timer.getTime());
      goToNextScreen();
    }
  } else {
    e.currentTarget.classList.add('checked');
    e.currentTarget.querySelector('input').checked = true;
  }
};

const guessOneImageCallback = (e) => {
  e.preventDefault();
  let answer = e.currentTarget.querySelector('input').value;
  if (answer === 'photo') {
    answer = [ImageType.PHOTO];
  } else if (answer === 'paint') {
    answer = [ImageType.PAINT];
  }
  state.setResult(answer, timer.getTime());
  goToNextScreen();
};

const findPaintCallback = (e) => {
  e.preventDefault();
  let gameOption = document.querySelectorAll('.game__option');
  let answer = [];
  for (let i = 0; i < gameOption.length; i++) {
    if (gameOption[i] === e.currentTarget) {
      answer.push(ImageType.PAINT);
    } else {
      answer.push(ImageType.PHOTO);
    }
  }
  state.setResult(answer, timer.getTime());
  goToNextScreen();
};

const timeOverCallback = (e) => {
  state.setResult([], 0);
  goToNextScreen();
};

const renderGameScreen = () => {
  let round = state.currentRound;

  const header = new GameHeaderView(round.lives);
  const headerEl = header.element;

  const footerEl = document.createElement('div');
  footerEl.classList.add('stats');
  const answerStats = new AnswerStatsView(round.stats);
  footerEl.appendChild(answerStats.element);

  const current = round.currentTask;
  const currentTask = round.questions[current];

  let gameTaskEl = document.createElement('p');
  gameTaskEl.classList.add('game__task');
  let gameForm;

  switch (currentTask.gameType) {
    case gameType.GUESS_TWO_IMAGES:
      gameTaskEl.innerHTML = dataUnited.questionText[0];
      gameForm = new FirstTypeGameView(currentTask, guessTwoImagesCallback);
      break;
    case gameType.GUESS_ONE_IMAGE:
      gameTaskEl.innerHTML = dataUnited.questionText[1];
      gameForm = new SecondTypeGame(currentTask, guessOneImageCallback);
      break;
    case gameType.FIND_PAINT:
      gameTaskEl.innerHTML = dataUnited.questionText[2];
      gameForm = new ThirdTypeGameView(currentTask, findPaintCallback);
      break;
  }

  const gameFormEl = gameForm.element;
  const gameEl = document.createElement('div');
  gameEl.classList.add('game');
  gameEl.appendChild(gameTaskEl);
  gameEl.appendChild(gameFormEl);
  gameEl.appendChild(footerEl);

  let gameScreenElement = document.createDocumentFragment();
  gameScreenElement.appendChild(headerEl);
  gameScreenElement.appendChild(gameEl);

  timer.configure(30, gameScreenElement.querySelector('.game__timer'), timeOverCallback).start();
  return gameScreenElement;
};

export default renderGameScreen;
