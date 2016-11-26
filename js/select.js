/**
 * Created by yulia on 20.11.2016.
 */
/**
 *
 * @param {Element} slide
 */
const select = (slide) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  let children = slide.childNodes;
  while (children.length) {
    mainElement.appendChild(children[0]);
  }
};

export default select;
