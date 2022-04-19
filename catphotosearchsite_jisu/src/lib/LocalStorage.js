export const setLocalStorage = (data) => {
  localStorage.setItem("lastSearchData", JSON.stringify(data));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("lastSearchData"));
};
