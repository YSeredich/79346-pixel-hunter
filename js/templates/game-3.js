/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
import getElementFromTemplate from '../compile';
import select from '../select';
import statsElement from './stats';

const game3Data = {
  header: {
    full_lives: 2,
    total_lives: 3
  },
  content: {
    question_text: 'Найдите рисунок среди изображений',
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455'
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455'
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://placehold.it/304x455'
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
  const _callback = (item) => `<div class="game__option${item.isSelected ? ' game__option--selected' : ''}">
        <img src="${item.src}" alt="${item.alt}" width="304" height="455">
      </div>`;
  let content = tasks.map(_callback);
  return content.join('');

};

const game = `<div class="game">
    <p class="game__task">${game3Data.content.question_text}</p>
    <form class="game__content  game__content--triple">
      ${options(game3Data.content.tasks)}
    </form>
    <div class="stats">${stats(game3Data.content.stats)}</div>
  </div>`;

const game3Text = `${header(game3Data.header)}${game}`;

let game3Element = getElementFromTemplate(game3Text);
let gameOption = game3Element.querySelectorAll('.game__option');
for ( let i = 0; i < gameOption.length; i++) {
  gameOption[i].onclick = (e) => {
    e.preventDefault();
    select(statsElement);
  };
}

export default game3Element;
