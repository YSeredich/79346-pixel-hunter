/**
 * Created by yulia on 27.11.2016.
 */
import back from './back';
import timer from './timer';
import lives from './lives';

const header = (headerData) => {
  return `<header class="header">
    ${back}
    ${timer}
    ${lives(headerData.full_lives, headerData.total_lives)}
  </header>`;
};

export default header;
