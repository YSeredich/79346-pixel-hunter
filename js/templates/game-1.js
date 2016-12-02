/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import action from './components/action';
import select from '../select';
import getElementFromTemplate from '../compile';
import game2Element from './game-2';

const game1Data = {
  header: {
    full_lives: 2,
    total_lives: 3
  },
  content: {
    question_text: 'Угадайте для каждого изображения фото или рисунок?',
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://placehold.it/468x458'
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://placehold.it/468x458'
    }],
    stats: {
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR'
      ]
    }
  }
};

const options = (tasks) => {
  const _callback = (item) => `<div class="game__option">
        <img src="${item.src}" alt=${item.alt}" width="468" height="458">
        ${action(item.name)}
      </div>`;
  let content = tasks.map(_callback);
  return content.join('');
};

const game = `<div class="game">
    <p class="game__task">${game1Data.content.question_text}</p>
    <form class="game__content">
      ${options(game1Data.content.tasks)}
    </form>
  <div class="stats">${stats(game1Data.content.stats)}</div>
  </div>`;

const game1Text = `${header(game1Data.header)}${game}`;

let game1Element = getElementFromTemplate(game1Text);
let gameAnswers = game1Element.querySelectorAll('.game__answer');
for ( let i = 0; i < gameAnswers.length; i++) {
  gameAnswers[i].onclick = (e) => {
    e.preventDefault();
    select(game2Element);
  };
}

export default game1Element;
