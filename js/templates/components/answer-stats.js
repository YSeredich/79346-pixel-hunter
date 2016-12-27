/**
 * Created by yulia on 27.11.2016.
 */
import {statsType} from '../../data/game-data';
import AbstractView from '../../abstractView';
export default class AnswerStatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  getMarkup() {
    const statsItem = {
      [statsType.WRONG]: '<li class="stats__result stats__result--wrong"></li>',
      [statsType.CORRECT]: '<li class="stats__result stats__result--correct"></li>',
      [statsType.SLOW]: '<li class="stats__result stats__result--slow"></li>',
      [statsType.FAST]: '<li class="stats__result stats__result--fast"></li>',
      [statsType.UNKNOWN]: '<li class="stats__result stats__result--unknown"></li>'
    };

    let _arr = this.data;
    for ( let i = _arr.length; i < 10; i++) {
      _arr.push(statsType.UNKNOWN);
    }

    const _callback = (item) => statsItem[item];
    let contentArray = _arr.map(_callback);
    const content = contentArray.join('');

    return `<ul class="stats">${content}</ul>`;
  }
}
