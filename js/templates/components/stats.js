/**
 * Created by yulia on 27.11.2016.
 */
const wrong = '<li class="stats__result stats__result--wrong"></li>';
const slow = '<li class="stats__result stats__result--"></li>';
const fast = '<li class="stats__result stats__result--fast"></li>';
const correct = '<li class="stats__result stats__result--correct"></li>';
const unknown = '<li class="stats__result stats__result--unknown"></li>';

let stats = `<div class="stats">
      <ul class="stats">
        ${wrong}
        ${slow}
        ${fast}
        ${correct}
        ${unknown}
        ${unknown}
        ${unknown}
        ${unknown}
        ${unknown}
        ${unknown}
      </ul>
    </div>`;

export default stats;
