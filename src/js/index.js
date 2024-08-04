import { ELEMENTS } from './UI.js';
import { getPdfOptions } from './getPdfOptionsPdf.js';
import { loadContent, saveContent } from './localStorageUtils.js';
import html2pdf from '/html2pdf.js';

ELEMENTS.DOWNLOAD_BTN.addEventListener('click', () =>
  html2pdf().set(getPdfOptions()).from(ELEMENTS.CONTAINER).save(),
);

ELEMENTS.CONTAINER.addEventListener(
  'blur',
  (event) => {
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
