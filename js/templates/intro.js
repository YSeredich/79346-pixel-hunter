/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import Application from '../application';
import dataUnited from '../data/game-data';

class IntroView extends AbstractView {
  getMarkup() {
    return `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${dataUnited.introData.text}</p></div>`;
  }
  bindHandlers() {
    this.element.querySelector('.intro__asterisk').onclick = (e) => {
      e.preventDefault();
      Application.showGreeting();
    };
  }
}

export default () => new IntroView().element;
