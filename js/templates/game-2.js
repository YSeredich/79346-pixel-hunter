/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
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
    stats: {}
  }
};

const action = (name) => {
  return `<label class="game__answer game__answer--photo">
          <input name="${name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
};

const option = (task) => {
  return `<div class="game__option">
        <img src="${task.src}" alt="${task.alt}" width="705" height="455">
        ${action(task.name)}
      </div>`;
};

const game = `<div class="game">
    <p class="game__task">${game2Data.content.question_text}</p>
    <form class="game__content  game__content--wide">
      ${option(game2Data.content.task)}
    </form>
    ${stats}
  </div>`;

const game2Text = `${header(game2Data.header)}
  ${game}`;

let game2Element = getElementFromTemplate(game2Text);
let gameAnswers = game2Element.querySelectorAll('.game__answer');
for ( let i = 0; i < gameAnswers.length; i++) {
  gameAnswers[i].onclick = (e) => {
    e.preventDefault();
    select(game3Element);
  };
}

export default game2Element;
