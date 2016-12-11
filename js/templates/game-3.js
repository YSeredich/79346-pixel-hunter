/**
 * Created by yulia on 19.11.2016.
 */

import getElementFromTemplate from '../compile';

const game3Function = (data, callback) => {
  const options = (tasks) => {
    const _callback = (item) => `<div class="game__option${item.isSelected ? ' game__option--selected' : ''}">
        <img src="${item.src}" alt="${item.alt}" width="304" height="455">
      </div>`;
    let content = tasks.map(_callback);
    return content.join('');
  };

  const gameText = `<form class="game__content  game__content--triple">${options(data.tasks)}</form>`;

  let gameElement = getElementFromTemplate(gameText);
  let gameOption = gameElement.querySelectorAll('.game__option');
  for ( let i = 0; i < gameOption.length; i++) {
    gameOption[i].onclick = callback;
  }

  return gameElement;
};

export default game3Function;
