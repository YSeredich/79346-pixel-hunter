/**
 * Created by yulia on 08.12.2016.
 */
import header from './components/game-header';
import stats from './components/game-footer';
import dataUnited from '../data/game-data';
import {ImageType} from '../data/game-data';
import game1Function from './game-1';
import game2Function from './game-2';
import game3Function from './game-3';
import statsFunction from './stats';
import getElementFromTemplate from '../compile';
import select from '../select';
import {state, updateState, setResult, countTotal} from '../data/state';
import {timerObject} from '../templates/components/timer';

export const goToNextScreen = () => {
  let round = state.rounds[state.currentRound];
  const current = round.currentTask;
  if (round.lives < 0) {
    updateState(state, countTotal(state));
    select(statsFunction());
  } else {
    if (current < 10) {
      const _timerCallback = () => {
        updateState(state, setResult(state, [], 0));
        goToNextScreen();
      };
      select(gameScreenFunction(), true, _timerCallback);
    } else {
      updateState(state, countTotal(state));
      select(statsFunction());
    }
  }
};

const gameScreenFunction = () => {
  let round = state.rounds[state.currentRound];
  const headerEl = header(round.lives);

  const footerText = `<div class="stats">${stats(round.stats)}</div>`;
  const footerEl = getElementFromTemplate(footerText);
  const current = round.currentTask;
  const currentTask = round.questions[current];

  let gameTask;
  let gameFormEl;
  let _callback;

  switch (currentTask.gameType) {
    case 1:
      _callback = (e) => {
        e.preventDefault();
        const gameAnswers = document.querySelectorAll('.game__answer');
        let firstAnswer = null;
        let firstAnswerName;
        for (let i = 0; i < gameAnswers.length; i++) {
          if (gameAnswers[i].classList.contains('checked')) {
            firstAnswer = gameAnswers[i].querySelector('input').value;
            firstAnswerName = gameAnswers[i].querySelector('input').name;
          }
        }
        if (firstAnswer) {
          const secondAnswer = e.currentTarget.querySelector('input').value;
          let answer;
          answer = (firstAnswerName === 'question1') ? [firstAnswer, secondAnswer] : [secondAnswer, firstAnswer];
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
        } else {
          e.currentTarget.classList.add('checked');
          e.currentTarget.querySelector('input').checked = true;
        }
      };
      gameTask = `<p class="game__task">${dataUnited.questionText[0]}</p>`;
      gameFormEl = game1Function(currentTask, _callback);
      break;
    case 2:
      _callback = (e) => {
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
      gameTask = `<p class="game__task">${dataUnited.questionText[1]}</p>`;
      gameFormEl = game2Function(currentTask, _callback);
      break;
    case 3:
      _callback = (e) => {
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
      gameTask = `<p class="game__task">${dataUnited.questionText[2]}</p>`;
      gameFormEl = game3Function(currentTask, _callback);
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

  return gameScreenElement;
};

export default gameScreenFunction;
