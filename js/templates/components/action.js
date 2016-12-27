/**
 * Created by yulia on 02.12.2016.
 */
import AbstractView from '../../abstractView';
export default class ActionView extends AbstractView {
  constructor(name) {
    super();
    this.name = name;
  }
  getMarkup() {
    return `<label class="game__answer game__answer--photo">
          <input name="${this.name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${this.name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
  }
}
