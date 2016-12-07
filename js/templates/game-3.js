/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import getElementFromTemplate from '../compile';
import select from '../select';
import statsFunction from './stats';
import dataUnited from '../data';

const game3Function = (data) => {
  const options = (tasks) => {
    const _callback = (item) => `<div class="game__option${item.isSelected ? ' game__option--selected' : ''}">
        <img src="${item.src}" alt="${item.alt}" width="304" height="455">
      </div>`;
    let content = tasks.map(_callback);
    return content.join('');

  };

  const game = `<div class="game">
    <p class="game__task">${data.content.question_text}</p>
    <form class="game__content  game__content--triple">
      ${options(data.content.tasks)}
    </form>
    <div class="stats">${stats(data.content.stats)}</div>
  </div>`;

  const game3Text = `${header(data.header)}${game}`;

  let game3Element = getElementFromTemplate(game3Text);
  let gameOption = game3Element.querySelectorAll('.game__option');
  for ( let i = 0; i < gameOption.length; i++) {
    gameOption[i].onclick = (e) => {
      e.preventDefault();
      select(statsFunction(dataUnited.statsData));
    };
  }

  return game3Element;
};


export default game3Function;
