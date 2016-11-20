/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import select from '../select';
import greetingElement from './greeting';

const introText = `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p></div>`;

let introElement = getElementFromTemplate(introText);
let greetingAsterisk = introElement.querySelector('.intro__asterisk');
greetingAsterisk.onclick = (e) => {
  e.preventDefault();
  select(greetingElement);
};

export default introElement;
