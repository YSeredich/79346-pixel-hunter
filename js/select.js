/**
 * Created by yulia on 20.11.2016.
 */
import {timerObject} from './templates/components/timer';
/**
 *
 * @param {Element} slide
 * @param {Boolean} isNeedTimer
 * @param {Function} timerCallback
 */
const select = (slide, isNeedTimer = false, timerCallback = () => {}) => {
  let mainElement = document.getElementById('main');
  timerObject.stop();
  mainElement.innerHTML = '';
  let container = document.createElement('div');
  container.appendChild(slide);
  mainElement.appendChild(container);
  if (isNeedTimer) {
    timerObject.configure(30, timerCallback).start();
  }
};

export default select;
