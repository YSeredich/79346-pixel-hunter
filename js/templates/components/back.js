/**
 * Created by yulia on 27.11.2016.
 */
import AbstractView from '../../abstractView';
export default class BackView extends AbstractView {
  getMarkup() {
    return `<div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>`;
  }
}
