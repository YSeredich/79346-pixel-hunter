/**
 * Created by yulia on 19.11.2016.
 */
import AbstractView from '../abstractView';
import Application from '../application';
import BackView from './components/back';
import dataUnited from '../data/game-data';

export default class RulesView extends AbstractView {
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
    this.rulesForm = this.element.querySelector('.rules__form');
    this.rulesInput = this.rulesForm.querySelector('.rules__input');
    this.rulesSubmit = this.rulesForm.querySelector('.rules__button');

    this.inputCallback = (e) => {
      if (this.rulesInput.value) {
        this.rulesSubmit.removeAttribute('disabled');
      } else {
        this.rulesSubmit.setAttribute('disabled', '');
      }
    };

    this.submitCallback = (e) => {
      e.preventDefault();
      Application.showGame();
    };

    this.rulesInput.addEventListener('input', this.inputCallback);
    this.rulesForm.addEventListener('submit', this.submitCallback);
  }

  clearHandlers() {
    this.rulesInput.removeEventListener('input', this.inputCallback);
    this.rulesForm.removeEventListener('submit', this.submitCallback);
  }
}
