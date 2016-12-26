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
  let container = document.createElement('div');
  container.appendChild(slide);
  mainElement.appendChild(container);
};

export default select;
