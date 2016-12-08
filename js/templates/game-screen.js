/**
 * Created by yulia on 08.12.2016.
 */
import header from './components/game-header';
import stats from './components/game-footer';
import dataUnited from '../data';
import game1Function from './game-1';
import game2Function from './game-2';
import game3Function from './game-3';
import statsFunction from './stats';
import getElementFromTemplate from '../compile';
import select from '../select';

const gameScreenFunction = (headerData, questionData, footerData, i) => {
  const headerEl = header(headerData);

  const footerText = `<div class="stats">${stats(footerData)}</div>`;
  const footerEl = getElementFromTemplate(footerText);

  let gameTask;
  let gameFormEl;

  let _callback = (e) => {
    if ( i + 1 < 10) {
      select(gameScreenFunction(dataUnited.headerData, dataUnited.questions[i + 1], dataUnited.footerData, i + 1));
    } else {
      select(statsFunction(dataUnited.statsData));
    }
  };

  switch (questionData.gameType) {
    case 1:
      gameTask = `<p class="game__task">${dataUnited.questionText[0]}</p>`;
      gameFormEl = game1Function(questionData, _callback);
      break;
    case 2:
      gameTask = `<p class="game__task">${dataUnited.questionText[1]}</p>`;
      gameFormEl = game2Function(questionData, _callback);
      break;
    case 3:
      gameTask = `<p class="game__task">${dataUnited.questionText[2]}</p>`;
      gameFormEl = game3Function(questionData, _callback);
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
