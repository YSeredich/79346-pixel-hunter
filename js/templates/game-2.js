/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import ActionView from './components/action';
export default class SecondTypeGame extends AbstractView {
  constructor(data, callback) {
    super();
    this.data = data;
    this.callback = callback;
  }
  getMarkup() {
    const option = (task) => {
      const action = new ActionView(task.name);
      return `<div class="game__option">
        <img src="${task.src}" alt="${task.alt}" width="705" height="455">
        ${action.getMarkup()}
      </div>`;
    };

    return `<form class="game__content  game__content--wide">${option(this.data.tasks[0])}</form>`;
  }
  bindHandlers() {
    let gameAnswers = this.element.querySelectorAll('.game__answer');
    for ( let i = 0; i < gameAnswers.length; i++) {
      gameAnswers[i].onclick = this.callback;
    }
  }
}
