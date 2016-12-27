/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
export default class ThirdTypeGameView extends AbstractView {
  constructor(data, callback) {
    super();
    this.data = data;
    this.callback = callback;
  }
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
    let gameOption = this.element.querySelectorAll('.game__option');
    for ( let i = 0; i < gameOption.length; i++) {
      gameOption[i].onclick = this.callback;
    }
  }
}
