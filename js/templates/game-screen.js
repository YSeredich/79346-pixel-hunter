/**
 * Created by yulia on 08.12.2016.
 */
import header from './components/game-header';
import stats from './components/game-footer';
import dataUnited from '../data/game-data';
import {ImageType, gameType} from '../data/game-data';
import game1Function from './game-1';
import game2Function from './game-2';
import game3Function from './game-3';
import statsFunction from './stats';
import getElementFromTemplate from '../compile';
import select from '../select';
import {state, updateState, setResult, countTotal} from '../data/state';
import {timerObject} from '../templates/components/timer';

const goToNextScreen = () => {
  let round = state.rounds[state.currentRound];
  const current = round.currentTask;
  if (round.lives < 0 || current >= 10) {
    updateState(state, countTotal(state));
    timerObject.stop();
    select(statsFunction());
  } else {
    timerObject.stop();
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
      updateState(state, setResult(state, answer, timerObject.getTime()));
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
  updateState(state, setResult(state, answer, timerObject.getTime()));
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
  updateState(state, setResult(state, answer, timerObject.getTime()));
  goToNextScreen();
};

const timeOverCallback = (e) => {
  updateState(state, setResult(state, [], 0));
  goToNextScreen();
};

const renderGameScreen = () => {
  let round = state.rounds[state.currentRound];

  const headerEl = header(round.lives);

  const footerText = `<div class="stats">${stats(round.stats)}</div>`;
  const footerEl = getElementFromTemplate(footerText);

  const current = round.currentTask;
  const currentTask = round.questions[current];

  let gameTask;
  let gameFormEl;

  switch (currentTask.gameType) {
    case gameType.GUESS_TWO_IMAGES:
      gameTask = `<p class="game__task">${dataUnited.questionText[0]}</p>`;
      gameFormEl = game1Function(currentTask, guessTwoImagesCallback);
      break;
    case gameType.GUESS_ONE_IMAGE:
      gameTask = `<p class="game__task">${dataUnited.questionText[1]}</p>`;
      gameFormEl = game2Function(currentTask, guessOneImageCallback);
      break;
    case gameType.FIND_PAINT:
      gameTask = `<p class="game__task">${dataUnited.questionText[2]}</p>`;
      gameFormEl = game3Function(currentTask, findPaintCallback);
      break;
  }

  const gameTaskEl = getElementFromTemplate(gameTask);
  const gameEl = document.createElement('div');
  gameEl.classList.add('game');
  gameEl.appendChild(gameTaskEl);
  gameEl.appendChild(gameFormEl);
  gameEl.appendChild(footerEl);

  let gameScreenElement = document.createDocumentFragment();
  gameScreenElement.appendChild(headerEl);
  gameScreenElement.appendChild(gameEl);

  timerObject.configure(30, gameScreenElement.querySelector('.game__timer'), timeOverCallback).start();
  return gameScreenElement;
};

export default renderGameScreen;
