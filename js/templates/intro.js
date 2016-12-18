/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import greetingFunction from './greeting';
import dataUnited from '../data/game-data';

const introFunction = (data) => {
  const introText = `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${data.text}</p></div>`;

  let introElement = getElementFromTemplate(introText);
  let greetingAsterisk = introElement.querySelector('.intro__asterisk');
  greetingAsterisk.onclick = (e) => {
    e.preventDefault();
    select(greetingFunction(dataUnited.greetingData));
  };

  return introElement;
};

export default introFunction;
