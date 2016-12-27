/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import select from '../select';
import BackView from './components/back';
import renderGameScreen from './game-screen';
import dataUnited from '../data/game-data';

class RulesView extends AbstractView {
  getMarkup() {
    const data = dataUnited.rulesData;
    const back = new BackView();
    return `<header class="header">${back.getMarkup()}</header>
<div class="rules  central--none">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${data.buttonText}</button>
    </form>
  </div>`;
  }
  bindHandlers() {
    let rulesForm = this.element.querySelector('.rules__form');
    let rulesSubmit = rulesForm.querySelector('.rules__button');
    let rulesInput = rulesForm.querySelector('.rules__input');

    rulesInput.oninput = (e) => {
      if (rulesInput.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    };
    rulesForm.onsubmit = (e) => {
      e.preventDefault();
      select(renderGameScreen());
    };
  }
}

export default () => new RulesView().element;
