/**
 * Created by yulia on 02.12.2016.
 */
/**
 *
  * @param {string} name
 * @return {string}
 */
const action = (name) => `<label class="game__answer game__answer--photo">
          <input name="${name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;

export default action;
