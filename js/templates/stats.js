/**
 * Created by yulia on 19.11.2016.
 */
import getElementFromTemplate from '../compile';
import stats from './components/stats';
import back from './components/back';

const statsData = {
  title: 'Победа!',
  total_result: '950',
  games: [
    {
      number: 1,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'UN', 'FS', 'UN'
      ],
      base_points: 100,
      base_total: 900,
      bonuses: {
        fast: {
          title: 'Бонус за скорость:',
          count: 1,
          points: 50,
          total: 50
        },
        life: {
          title: 'Бонус за жизни:',
          count: 2,
          points: 50,
          total: 100
        },
        slow: {
          title: 'Штраф за медлительность:',
          count: 2,
          points: 50,
          total: -100
        }
      }
    },
    {
      number: 2,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'WR', 'FS', 'WR'
      ],
      total: '',
      final: 'fail'
    },
    {
      number: 3,
      quest_count: 10,
      passed: [
        'WR', 'SL', 'FS', 'CR', 'WR', 'UN', 'SL', 'UN', 'FS', 'UN'
      ],
      base_points: 100,
      base_total: 900,
      bonuses: {
        life: {
          title: 'Бонус за жизни:',
          count: 2,
          points: 50,
          total: 100
        }
      }
    }
  ]
};

const statsText = `<header class="header">${back}</header>
  <div class="result">
    <h1>${statsData.title}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsData.games[0].number}.</td>
        <td colspan="2">${stats(statsData.games[0])}</td>
        <td class="result__points">×&nbsp;${statsData.games[0].base_points}</td>
        <td class="result__total">${statsData.games[0].base_total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsData.games[0].bonuses.fast.title}</td>
        <td class="result__extra">${statsData.games[0].bonuses.fast.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${statsData.games[0].bonuses.fast.points}</td>
        <td class="result__total">${statsData.games[0].bonuses.fast.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsData.games[0].bonuses.life.title}</td>
        <td class="result__extra">${statsData.games[0].bonuses.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${statsData.games[0].bonuses.life.points}</td>
        <td class="result__total">${statsData.games[0].bonuses.life.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsData.games[0].bonuses.slow.title}</td>
        <td class="result__extra">${statsData.games[0].bonuses.slow.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${statsData.games[0].bonuses.slow.points}</td>
        <td class="result__total">${statsData.games[0].bonuses.slow.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsData.games[1].number}.</td>
        <td>${stats(statsData.games[1])}</td>
        <td class="result__total">${statsData.games[1].total}</td>
        <td class="result__total  result__total--final">${statsData.games[1].final}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsData.games[2].number}.</td>
        <td colspan="2">${stats(statsData.games[2])}</td>
        <td class="result__points">×&nbsp;${statsData.games[2].base_points}</td>
        <td class="result__total">${statsData.games[2].base_total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsData.games[2].bonuses.life.title}</td>
        <td class="result__extra">${statsData.games[2].bonuses.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${statsData.games[2].bonuses.life.points}</td>
        <td class="result__total">${statsData.games[2].bonuses.life.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statsData.total_result}</td>
      </tr>
    </table>
  </div>`;

const statsElement = getElementFromTemplate(statsText);

export default statsElement;
