/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import back from './components/back';
import gameScreenFunction from './game-screen';
import dataUnited from '../data/game-data';

const rulesFunction = (data) => {

  const rulesText = `<header class="header">${back}</header>
<div class="rules  central--none">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${data.buttonText}</button>
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
    select(gameScreenFunction(dataUnited.headerData, dataUnited.questions[0], dataUnited.footerData, 0), true);
  };

  return rulesElement;
};

export default rulesFunction;
