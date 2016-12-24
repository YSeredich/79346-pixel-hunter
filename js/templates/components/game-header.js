/**
 * Created by yulia on 27.11.2016.
 */
import back from './back';
import timer from './timer';
import lives from './lives';
import getElementFromTemplate from '../../compile';

const header = (numLives) => {
  const headerText = `<header class="header">${back}${timer}${lives(numLives)}</header>`;
  return getElementFromTemplate(headerText);
};

export default header;
