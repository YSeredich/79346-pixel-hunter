import {introElement} from './templates/intro';
import {greetingElement} from './templates/greeting';
import {rulesElement} from './templates/rules';
import {game1Element} from './templates/game-1';
import {game2Element} from './templates/game-2';
import {game3Element} from './templates/game-3';
import {statsElement} from './templates/stats';
(function () {

  // Rules
  let rulesSubmit = rulesElement.querySelector('.rules__button');
  let rulesInput = rulesElement.querySelector('.rules__input');

  rulesInput.oninput = (e) => {
    if (rulesInput.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    introElement,
    greetingElement,
    rulesElement,
    game1Element,
    game2Element,
    game3Element,
    statsElement
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    let children = slides[index].childNodes;
    for ( let i = 0; i < children.length; i++ ) {
      mainElement.appendChild(children[i].cloneNode(true));
    }
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
