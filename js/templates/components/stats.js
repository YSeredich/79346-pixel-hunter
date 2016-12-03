/**
 * Created by yulia on 27.11.2016.
 */

const statsItem = {
  'WR': '<li class="stats__result stats__result--wrong"></li>',
  'SL': '<li class="stats__result stats__result--slow"></li>',
  'FS': '<li class="stats__result stats__result--fast"></li>',
  'CR': '<li class="stats__result stats__result--correct"></li>',
  'UN': '<li class="stats__result stats__result--unknown"></li>'
};

let stats = (data) => {
  let _arr = data.passed;
  for ( let i = _arr.length; i < data.quest_count; i++) {
    _arr.push('UN');
  }

  const _callback = (item) => statsItem[item];
  let contentArray = _arr.map(_callback);
  const content = contentArray.join('');

  return `<ul class="stats">${content}</ul>`;
};

export default stats;
