/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import ActionView from './components/action';
export default class FirstTypeGameView extends AbstractView {
  getMarkup() {
    const options = (tasks) => {
      const _callback = (item) => {
        const action = new ActionView(item.name);
        return `<div class="game__option">
        <img src="${item.src}" alt=${item.alt}" width="468" height="458">
        ${action.getMarkup()}
      </div>`;
      };
      let content = tasks.map(_callback);
      return content.join('');
    };

    return `<form class="game__content">${options(this.data.tasks)}</form>`;
  }

  bindHandlers() {
    this.actionElements = this.element.querySelectorAll('.game__answer');
    super.bindHandlers();
  }
}
