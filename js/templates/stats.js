/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import stats from './components/game-footer';
import back from './components/back';
import {state} from '../data/state';
import dataUnited from '../data/game-data';
import {prices} from '../data/game-data';
const data = dataUnited.statsData;

const statsFunction = () => {
  const round = state.rounds[state.currentRound];
  const mainBlock = `<tr>
        <td class="result__number">1.</td>
        <td colspan="2">${stats(round.stats)}</td>
        <td class="result__points">${round.isWin ? '×&nbsp;' + prices.CORRECT : ''}</td>
        <td class="result__total">${round.isWin ? round.totalPoints : data.titleFail}</td>
      </tr>`;

  let bonusesBlock;

  if (round.isWin && ( round.fastBonuses !== null || round.livesBonuses !== null || round.slowFine !== null )) {
    let fast;
    let life;
    let slow;
    if (round.fastBonuses) {
      fast = `<tr>
        <td></td>
        <td class="result__extra">${data.speedBonusTitle}</td>
        <td class="result__extra">${round.fastBonuses}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${prices.BONUS}</td>
        <td class="result__total">${round.fastBonuses * prices.BONUS}</td>
      </tr>`;
    } else {
      fast = '';
    }
    if (round.livesBonuses) {
      life = `<tr>
        <td></td>
        <td class="result__extra">${data.lifeBonusTitle}</td>
        <td class="result__extra">${round.livesBonuses}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${prices.BONUS}</td>
        <td class="result__total">${round.livesBonuses * prices.BONUS}</td>
      </tr>`;
    } else {
      life = '';
    }
    if (round.slowFine) {
      slow = `<tr>
        <td></td>
        <td class="result__extra">${data.lifeBonusTitle}</td>
        <td class="result__extra">${round.slowFine}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${prices.FINE}</td>
        <td class="result__total">${round.slowFine * prices.FINE}</td>
      </tr>`;
    } else {
      slow = '';
    }
    bonusesBlock = `${fast}${life}${slow}`;
  } else {
    bonusesBlock = '';
  }

  const statsText = `<header class="header">${back}</header>
  <div class="result">
    <h1>${round.isWin ? data.titleWin : data.titleFail}</h1>
    <table class="result__table">${mainBlock}${bonusesBlock}</table>
  </div>`;

  return getElementFromTemplate(statsText);
};

export default statsFunction;
