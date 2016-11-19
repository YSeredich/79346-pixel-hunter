/**
 * Created by yulia on 19.11.2016.
 */
/**
 *
 * @param htmlString
 * @returns {Element}
 */
export const getElementFromTemplate = (htmlString) => {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString;
  return wrapper;
};



