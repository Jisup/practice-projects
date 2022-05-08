export const getLocalStorage = (query) => {
  return localStorage.getItem(query);
};
export const setLocalStorage = (data) => {
  localStorage.setItem("products_cart", data);
};
