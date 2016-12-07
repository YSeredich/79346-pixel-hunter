/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import action from './components/action';
import getElementFromTemplate from '../compile';
import select from '../select';
import game3Function from './game-3';
import dataUnited from '../data';

const game2Function = (data) => {
  const option = (task) => `<div class="game__option">
        <img src="${task.src}" alt="${task.alt}" width="705" height="455">
        ${action(task.name)}
      </div>`;

  const game = `<div class="game">
    <p class="game__task">${data.content.question_text}</p>
    <form class="game__content  game__content--wide">
      ${option(data.content.task)}
    </form>
    <div class="stats">${stats(data.content.stats)}</div>
  </div>`;

  const game2Text = `${header(data.header)}${game}`;

  let game2Element = getElementFromTemplate(game2Text);
  let gameAnswers = game2Element.querySelectorAll('.game__answer');
  for ( let i = 0; i < gameAnswers.length; i++) {
    gameAnswers[i].onclick = (e) => {
      e.preventDefault();
      select(game3Function(dataUnited.game3Data));
    };
  }

  return game2Element;
};

export default game2Function;
