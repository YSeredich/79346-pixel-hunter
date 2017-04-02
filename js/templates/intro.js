/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import Application from '../application';
import dataUnited from '../data/game-data';

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.callback = (e) => {
      e.preventDefault();
      Application.showGreeting();
    }
  }
  getMarkup() {
    return `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${dataUnited.introData.text}</p></div>`;
  }
  bindHandlers() {
    this.actionElements = this.element.querySelectorAll('.intro__asterisk');
    super.bindHandlers();
  }
}
