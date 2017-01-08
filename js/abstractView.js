export default class AbstractView {
  constructor(data, callback) {
    this.data = data;
    this.callback = callback;
    this.actionElements = null;
  }

  get element() {
    if (!this._element) {
      let wrapper = document.createElement('div');
      wrapper.innerHTML = this.getMarkup();
      this._element = document.createDocumentFragment();
      while (wrapper.childNodes.length) {
        this._element.appendChild(wrapper.childNodes[0]);
      }
      this.bindHandlers();
    }
    return this._element;
  }

  getMarkup() {

  }

  bindHandlers() {
    if(this.actionElements) {
      for (let i = 0; i < this.actionElements.length; i++) {
        this.actionElements[i].addEventListener('click', this.callback);
      }
    }
  }

  clearHandlers() {
    if(this.actionElements) {
      for (let i = 0; i < this.actionElements.length; i++) {
        this.actionElements[i].removeEventListener('click', this.callback);
      }
    }
  }
}
