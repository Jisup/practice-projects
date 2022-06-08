export function setLocalStorage(data, query) {
  localStorage.setItem(query, JSON.stringify(data));
}

export function getLocalStorage(query) {
  return JSON.parse(localStorage.getItem(query));
}
