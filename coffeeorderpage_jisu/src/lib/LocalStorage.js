export const getLocalStorage = (query) => {
  return JSON.parse(localStorage.getItem(query));
};

export const setLocalStorage = (data) => {
  localStorage.setItem("products_cart", JSON.stringify(data));
};

export const deleteLocalStorage = (query) => {
  return localStorage.removeItem(query);
};
