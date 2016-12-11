/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import rulesFunction from './rules';
import dataUnited from '../data';

const greetingFunction = (data) => {
  const greetingText = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="${data.logo.src}" width="201" height="89" alt="{data.logo.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

  let greetingElement = getElementFromTemplate(greetingText);
  let greetingContinue = greetingElement.querySelector('.greeting__continue');
  greetingContinue.onclick = (e) => {
    e.preventDefault();
    select(rulesFunction(dataUnited.rulesData));
  };

  return greetingElement;
};

export default greetingFunction;
