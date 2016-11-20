/**
 * Created by yulia on 19.11.2016.
 */
/**
 *
 * @param {string} htmlString
 * @return {Element}
 */
export default getElementFromTemplate = (htmlString) => {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString;
  return wrapper;
};
