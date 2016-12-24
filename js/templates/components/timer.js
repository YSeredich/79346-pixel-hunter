/**
 * Created by yulia on 27.11.2016.
 */
const timer = '<h1 class="game__timer">30</h1>';
export default timer;

export const timerObject = {
  currentTime: null,
  timeoutId: null,
  container: null,
  callback: null,
  configure: function (sec, callback) {
    this.container = document.querySelector('.game__timer');
    this.currentTime = sec;
    this.callback = callback;
    return this;
  },
  getTime: function () {
    return this.currentTime;
  },
  start: function () {
    const _timer = () => {
      this.currentTime--;
      this.container.innerHTML = this.currentTime;

      if (this.currentTime <= 0) {
        if (this.callback !== null) {
          this.callback();
        }
      } else {
        this.timeoutId = setTimeout(_timer, 1000);
      }
    };
    this.timeoutId = setTimeout(_timer, 1000);
  },
  stop: function () {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
    this.callback = null;
  }
};
