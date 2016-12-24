/**
 * Created by yulia on 27.11.2016.
 */
import {statsType} from '../../data/game-data';
const statsItem = {
  0: '<li class="stats__result stats__result--wrong"></li>',
  1: '<li class="stats__result stats__result--correct"></li>',
  2: '<li class="stats__result stats__result--slow"></li>',
  3: '<li class="stats__result stats__result--fast"></li>',
  4: '<li class="stats__result stats__result--unknown"></li>'
};

let stats = (data) => {
  let _arr = data;
  for ( let i = _arr.length; i < 10; i++) {
    _arr.push(statsType.UNKNOWN);
  }

  const _callback = (item) => statsItem[item];
  let contentArray = _arr.map(_callback);
  const content = contentArray.join('');

  return `<ul class="stats">${content}</ul>`;
};

export default stats;
