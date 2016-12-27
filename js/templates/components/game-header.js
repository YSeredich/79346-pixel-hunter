/**
 * Created by yulia on 27.11.2016.
 */
import BackView from './back';
import LivesView from './lives';
import AbstractView from '../../abstractView';

export default class GameHeaderView extends AbstractView {
  constructor(numLives) {
    super();
    this.numLives = numLives;
    this.back = new BackView();
  }

  getMarkup() {
    const livesView = new LivesView(this.numLives);
    return `<header class="header">${this.back.getMarkup()}<h1 class="game__timer">30</h1>${livesView.getMarkup()}</header>`;
  }
}
