/**
 * Created by yulia on 28.12.2016.
 */
import createIntro from './templates/intro';
import createGreeting from './templates/greeting';
import createRules from './templates/rules';
import Game from './templates/game-screen';
import createResults from './templates/stats';

let main = document.getElementById('main');
const changeView = (slide) => {
  main.innerHTML = '';
  let container = document.createElement('div');
  container.appendChild(slide);
  main.appendChild(container);
};

export default class Application {
  static showIntro() {
    changeView(createIntro());
  }
  static showGreeting() {
    changeView(createGreeting());
  }
  static showRules() {
    changeView(createRules());
  }
  static showGame() {
    changeView(new Game().startLevel());
  }
  static showResults() {
    changeView(createResults());
  }
}


