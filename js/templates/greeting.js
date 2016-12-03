/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import rulesElement from './rules';

const greetingData = {
  logo: {
    src: 'img/logo_big.png',
    alt: 'Pixel Hunter'
  },
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

const greetingText = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="${greetingData.logo.src}" width="201" height="89" alt="{greetingData.logo.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${greetingData.title}</h3>
      <p>${greetingData.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

let greetingElement = getElementFromTemplate(greetingText);
let greetingContinue = greetingElement.querySelector('.greeting__continue');
greetingContinue.onclick = (e) => {
  e.preventDefault();
  select(rulesElement);
};

export default greetingElement;
