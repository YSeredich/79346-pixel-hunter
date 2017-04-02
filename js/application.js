/**
 * Created by yulia on 28.12.2016.
 */
import Intro from './templates/intro';
import Greeting from './templates/greeting';
import Rules from './templates/rules';
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
    this.currentView = new Intro();
    changeView(this.currentView.element);
  }
  static showGreeting() {
    this.currentView.clearHandlers();
    this.currentView = new Greeting();
    changeView(this.currentView.element);
  }
  static showRules() {
    this.currentView.clearHandlers();
    this.currentView = new Rules();
    changeView(this.currentView.element);
  }
  static showGame() {
    if(this.currentView) {
      this.currentView.clearHandlers();
    }
    this.currentView = null;
    changeView(new Game().startLevel());
  }
  static showResults() {
    changeView(createResults());
  }
}


