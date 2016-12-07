/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import stats from './components/stats';
import back from './components/back';

const statsFunction = (data) => {
  const statsText = `<header class="header">${back}</header>
  <div class="result">
    <h1>${data.title}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${data.games[0].number}.</td>
        <td colspan="2">${stats(data.games[0])}</td>
        <td class="result__points">×&nbsp;${data.games[0].base_points}</td>
        <td class="result__total">${data.games[0].base_total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.games[0].bonuses.fast.title}</td>
        <td class="result__extra">${data.games[0].bonuses.fast.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${data.games[0].bonuses.fast.points}</td>
        <td class="result__total">${data.games[0].bonuses.fast.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.games[0].bonuses.life.title}</td>
        <td class="result__extra">${data.games[0].bonuses.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${data.games[0].bonuses.life.points}</td>
        <td class="result__total">${data.games[0].bonuses.life.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.games[0].bonuses.slow.title}</td>
        <td class="result__extra">${data.games[0].bonuses.slow.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${data.games[0].bonuses.slow.points}</td>
        <td class="result__total">${data.games[0].bonuses.slow.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${data.games[1].number}.</td>
        <td>${stats(data.games[1])}</td>
        <td class="result__total">${data.games[1].total}</td>
        <td class="result__total  result__total--final">${data.games[1].final}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${data.games[2].number}.</td>
        <td colspan="2">${stats(data.games[2])}</td>
        <td class="result__points">×&nbsp;${data.games[2].base_points}</td>
        <td class="result__total">${data.games[2].base_total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.games[2].bonuses.life.title}</td>
        <td class="result__extra">${data.games[2].bonuses.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${data.games[2].bonuses.life.points}</td>
        <td class="result__total">${data.games[2].bonuses.life.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${data.total_result}</td>
      </tr>
    </table>
  </div>`;

  return getElementFromTemplate(statsText);
};

export default statsFunction;
