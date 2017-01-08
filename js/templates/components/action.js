/**
 * Created by yulia on 02.12.2016.
 */
import AbstractView from '../../abstractView';
export default class ActionView extends AbstractView {
  getMarkup() {
    return `<label class="game__answer game__answer--photo">
          <input name="${this.data}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${this.data}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
  }
}
