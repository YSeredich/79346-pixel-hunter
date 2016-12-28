/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import Application from '../application';
import dataUnited from '../data/game-data';

class GreetingView extends AbstractView {
  getMarkup() {
    const data = dataUnited.greetingData;
    return `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="${data.logo.src}" width="201" height="89" alt="{data.logo.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;
  }
  bindHandlers() {
    this.element.querySelector('.greeting__continue').onclick = (e) => {
      e.preventDefault();
      Application.showRules();
    };
  }
}

export default () => new GreetingView().element;
