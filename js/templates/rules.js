/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import {select} from '../select';
import {game1Element} from './game-1';
const rulesText = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header><div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
const rulesElement = getElementFromTemplate(rulesText);

let rulesForm = document.querySelector('.rules__form');
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
  select(game1Element);
};

export default rulesElement;
