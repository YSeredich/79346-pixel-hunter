/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import back from './components/back';
import game1Element from './game-1';

const rulesData = {
  title: 'Правила',
  text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`,
  placeholder: 'Ваше Имя',
  buttonText: 'Go!'

};

const rulesText = `<header class="header">${back}</header>
<div class="rules  central--none">
    <h1 class="rules__title">${rulesData.title}</h1>
    <p class="rules__description">${rulesData.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${rulesData.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${rulesData.buttonText}</button>
    </form>
  </div>`;

let rulesElement = getElementFromTemplate(rulesText);
let rulesForm = rulesElement.querySelector('.rules__form');
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
  select(game1Element);
};

export default rulesElement;
