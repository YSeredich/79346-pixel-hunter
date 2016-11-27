/**
 * Created by yulia on 19.11.2016.
 */
import header from './components/game-header';
import stats from './components/stats';
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
        <img src="${task.src}" alt=${task.alt}" width="468" height="458">
        ${action(task.name)}
      </div>`;
};

const options = (tasks) => {
  let content = '';
  for (let i = 0; i < tasks.length; i++) {
    content += option(tasks[i]);
  }
  return content;
};

const game = `<div class="game">
    <p class="game__task">${game1Data.content.question_text}</p>
    <form class="game__content">
      ${options(game1Data.content.tasks)}
    </form>
  ${stats}
  </div>`;

const game1Text = `${header(game1Data.header)}
  ${game}`;

let game1Element = getElementFromTemplate(game1Text);
let gameAnswers = game1Element.querySelectorAll('.game__answer');
for ( let i = 0; i < gameAnswers.length; i++) {
  gameAnswers[i].onclick = (e) => {
    e.preventDefault();
    select(game2Element);
  };
}

export default game1Element;
