/**
 * Created by yulia on 19.11.2016.
 */

import action from './components/action';
import getElementFromTemplate from '../compile';

const game1Function = (data, callback) => {
  const options = (tasks) => {
    const _callback = (item) => `<div class="game__option">
        <img src="${item.src}" alt=${item.alt}" width="468" height="458">
        ${action(item.name)}
      </div>`;
    let content = tasks.map(_callback);
    return content.join('');
  };

  const gameText = `<form class="game__content">${options(data.tasks)}</form>`;

  let gameElement = getElementFromTemplate(gameText);
  let gameAnswers = gameElement.querySelectorAll('.game__answer');
  for ( let i = 0; i < gameAnswers.length; i++) {
    gameAnswers[i].onclick = callback;
  }

  return gameElement;
};

export default game1Function;
