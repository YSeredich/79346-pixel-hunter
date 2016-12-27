/**
 * Created by yulia on 19.11.2016.
 */

import action from './components/action';
import getElementFromTemplate from '../compile';

const game2Function = (data, callback) => {
  const option = (task) => `<div class="game__option">
        <img src="${task.src}" alt="${task.alt}" width="705" height="455">
        ${action(task.name)}
      </div>`;

  const gameText = `<form class="game__content  game__content--wide">${option(data.tasks[0])}</form>`;

  let gameElement = getElementFromTemplate(gameText);
  let gameAnswers = gameElement.querySelectorAll('.game__answer');
  for ( let i = 0; i < gameAnswers.length; i++) {
    gameAnswers[i].onclick = callback;
  }

  return gameElement;
};

export default game2Function;
