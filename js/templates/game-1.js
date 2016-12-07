/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import action from './components/action';
import select from '../select';
import getElementFromTemplate from '../compile';
import game2Function from './game-2';
import dataUnited from '../data';

const game1Function = (data) => {
  const options = (tasks) => {
    const _callback = (item) => `<div class="game__option">
        <img src="${item.src}" alt=${item.alt}" width="468" height="458">
        ${action(item.name)}
      </div>`;
    let content = tasks.map(_callback);
    return content.join('');
  };

  const game = `<div class="game">
    <p class="game__task">${data.content.question_text}</p>
    <form class="game__content">
      ${options(data.content.tasks)}
    </form>
  <div class="stats">${stats(data.content.stats)}</div>
  </div>`;

  const game1Text = `${header(data.header)}${game}`;

  let game1Element = getElementFromTemplate(game1Text);
  let gameAnswers = game1Element.querySelectorAll('.game__answer');
  for ( let i = 0; i < gameAnswers.length; i++) {
    gameAnswers[i].onclick = (e) => {
      e.preventDefault();
      select(game2Function(dataUnited.game2Data));
    };
  }

  return game1Element;
};

export default game1Function;
