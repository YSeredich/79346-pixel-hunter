/**
 * Created by yulia on 27.11.2016.
 */

const fullElement = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
const emptyElement = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
let content = '';
const lives = (full, total) => {
  for (let j = 0; j < total - full; j++) {
    content += emptyElement;
  }
  for (let i = 0; i < full; i++) {
    content += fullElement;
  }
  return `<div class="game__lives">
      ${content}
    </div>`;
};

export default lives;
