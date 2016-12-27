export default class AbstractView {
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

  }
  clearHandlers() {

  }
}
