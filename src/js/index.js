/* global html2pdf */
import { ELEMENTS } from './UI.js';
import { getPdfOptions } from './getPdfOptionsPdf.js';
import { loadContent, saveContent } from './localStorageUtils.js';

ELEMENTS.DOWNLOAD_BTN.addEventListener('click', () =>
  html2pdf().set(getPdfOptions()).from(ELEMENTS.CONTAINER).save(),
);

ELEMENTS.CONTAINER.addEventListener(
  'blur',
  (event) => {
    console.log(event.target);
    const isEditable = event.target.matches('[data-editable]');
    if (isEditable) {
      saveContent(event.target);
    }
  },
  true,
);

document.addEventListener('DOMContentLoaded', () => {
  ELEMENTS.EDITABLE.forEach(loadContent);
});
