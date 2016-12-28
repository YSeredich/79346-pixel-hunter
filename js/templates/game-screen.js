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
import Application from '../application';
import state from '../data/state';
import timer from '../templates/components/timer';

export default class GamePresenter {
  constructor() {
    this.round = state.currentRound;
    this.task = this.round.questions[this.round.currentTask];

    this.header = this.renderHeader();
    this.level = this.renderLevel();

    this.game = document.createDocumentFragment();
    this.game.appendChild(this.header);
    this.game.appendChild(this.level);
  }

  renderHeader() {
    const header = new GameHeaderView(this.round.lives);
    return header.element;
  }

  renderLevelQuestion() {
    let gameTaskEl = document.createElement('p');
    gameTaskEl.innerHTML = dataUnited.questionText[this.task.gameType];
    gameTaskEl.classList.add('game__task');
    return gameTaskEl;
  }

  renderLevelTask() {
    switch (this.task.gameType) {
      case gameType.GUESS_TWO_IMAGES:
        return new FirstTypeGameView(this.task, GamePresenter.guessTwoImagesCallback).element;
      case gameType.GUESS_ONE_IMAGE:
        return new SecondTypeGame(this.task, GamePresenter.guessOneImageCallback).element;
      case gameType.FIND_PAINT:
        return new ThirdTypeGameView(this.task, GamePresenter.findPaintCallback).element;
      default:
        throw new Error('Unknown game type');
    }
  }

  renderLevelFooter() {
    const footerEl = document.createElement('div');
    footerEl.classList.add('stats');
    const answerStats = new AnswerStatsView(this.round.stats);
    footerEl.appendChild(answerStats.element);
    return footerEl;
  }

  renderLevel() {
    const gameEl = document.createElement('div');
    gameEl.classList.add('game');
    gameEl.appendChild(this.renderLevelQuestion());
    gameEl.appendChild(this.renderLevelTask());
    gameEl.appendChild(this.renderLevelFooter());
    return gameEl;
  }

  startLevel() {
    timer.configure(30, this.game.querySelector('.game__timer'), GamePresenter.timeOverCallback).start();
    return this.game;
  }

  static timeOverCallback() {
    state.setResult([], 0);
    GamePresenter.goToNextScreen();
  }

  static guessTwoImagesCallback(e) {
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
        timer.stop();
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
        GamePresenter.goToNextScreen();
      }
    } else {
      e.currentTarget.classList.add('checked');
      e.currentTarget.querySelector('input').checked = true;
    }
  }

  static guessOneImageCallback(e) {
    e.preventDefault();
    timer.stop();
    let answer = e.currentTarget.querySelector('input').value;
    if (answer === 'photo') {
      answer = [ImageType.PHOTO];
    } else if (answer === 'paint') {
      answer = [ImageType.PAINT];
    }
    state.setResult(answer, timer.getTime());
    GamePresenter.goToNextScreen();
  }

  static findPaintCallback(e) {
    e.preventDefault();
    timer.stop();
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
    GamePresenter.goToNextScreen();
  }

  static goToNextScreen() {
    let round = state.currentRound;
    const current = round.currentTask;
    if (round.lives < 0 || current >= 10) {
      state.countTotal();
      Application.showResults();
    } else {
      Application.showGame();
    }
  }

}
