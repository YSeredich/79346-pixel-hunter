/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
const introText = `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p></div>`;
const introElement = getElementFromTemplate(introText);
export default introElement;
