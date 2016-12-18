/**
 * Created by yulia on 19.11.2016.
 */
/**
 *
 * @param {string} htmlString
 * @return {DocumentFragment}
 */
const getElementFromTemplate = (htmlString) => {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString;
  let element = document.createDocumentFragment();
  while (wrapper.childNodes.length) {
    element.appendChild(wrapper.childNodes[0]);
  }
  return element;
};

export default getElementFromTemplate;
