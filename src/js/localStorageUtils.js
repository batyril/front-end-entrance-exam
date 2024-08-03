export function saveContent(element) {
  const key = element.getAttribute('data-editable');
  if (key) {
    localStorage.setItem(key, element.innerHTML);
  }
}

function getSavedContent(key) {
  return localStorage.getItem(key);
}

export function loadContent(element) {
  const key = element.getAttribute('data-editable');
  if (!key) return;

  const savedContent = getSavedContent(key);
  if (savedContent) {
    element.innerHTML = savedContent;
  }
}
