export const getLocalStorage = (data) => {
  localStorage.setItem("", data);
};
export const setLocalStorage = (query) => {
  return localStorage.getItem(query);
};
