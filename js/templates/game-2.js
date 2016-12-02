/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import action from './components/action';
import getElementFromTemplate from '../compile';
import select from '../select';
import game3Element from './game-3';

const game2Data = {
  header: {
    full_lives: 2,
    total_lives: 3
  },
  content: {
    question_text: 'Угадай, фото или рисунок?',
    task: {
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/705x455'
    },
    stats: {
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR'
      ]
    }
  }
};

const option = (task) => `<div class="game__option">
        <img src="${task.src}" alt="${task.alt}" width="705" height="455">
        ${action(task.name)}
      </div>`;

const game = `<div class="game">
    <p class="game__task">${game2Data.content.question_text}</p>
    <form class="game__content  game__content--wide">
      ${option(game2Data.content.task)}
    </form>
    <div class="stats">${stats(game2Data.content.stats)}</div>
  </div>`;

const game2Text = `${header(game2Data.header)}${game}`;

let game2Element = getElementFromTemplate(game2Text);
let gameAnswers = game2Element.querySelectorAll('.game__answer');
for ( let i = 0; i < gameAnswers.length; i++) {
  gameAnswers[i].onclick = (e) => {
    e.preventDefault();
    select(game3Element);
  };
}

export default game2Element;
