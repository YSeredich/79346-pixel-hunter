/**
 * Created by yulia on 27.11.2016.
 */
const timer = '<h1 class="game__timer">30</h1>';
export default timer;

export const timerObject = {
  timeoutId: null,
  currentTime: null,
  container: null,
  callback: null,
  configure: function (sec, container, callback) {
    this.currentTime = sec;
    this.container = container;
    this.callback = callback;
    return this;
  },
  getTime: function () {
    return this.currentTime;
  },
  start: function () {
    const _tick = () => {
      this.container.innerHTML = this.currentTime;
      this.currentTime--;

      if (this.currentTime <= 0) {
        if (this.callback !== null) {
          this.callback();
        }
      } else {
        this.timeoutId = setTimeout(_tick, 1000);
      }
    };

    _tick();
  },
  stop: function () {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
    this.callback = null;
  }
};
