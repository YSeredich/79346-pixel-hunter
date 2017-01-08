/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import ActionView from './components/action';
export default class SecondTypeGame extends AbstractView {
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
    this.actionElements = this.element.querySelectorAll('.game__answer');
    super.bindHandlers();
  }
}
