/**
 * Created by yulia on 20.11.2016.
 */
/**
 *
 * @param {Element} slide
 */
export const select = (slide) => {
  let mainElement = document.getElementById('main');
  console.log(mainElement);
  mainElement.innerHTML = '';
  let children = slide.childNodes;
  for ( let i = 0; i < children.length; i++ ) {
    mainElement.appendChild(children[i].cloneNode(true));
  }
};
