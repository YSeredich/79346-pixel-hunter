/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
export default class ThirdTypeGameView extends AbstractView {
  getMarkup() {
    const options = (tasks) => {
      const _callback = (item) => `<div class="game__option${item.isSelected ? ' game__option--selected' : ''}">
        <img src="${item.src}" alt="${item.alt}" width="304" height="455">
      </div>`;
      let content = tasks.map(_callback);
      return content.join('');
    };

    return `<form class="game__content  game__content--triple">${options(this.data.tasks)}</form>`;
  }
  bindHandlers() {
    this.actionElements = this.element.querySelectorAll('.game__option');
    super.bindHandlers();
  }
}
