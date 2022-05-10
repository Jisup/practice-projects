import ProductListPage from "../components/ProductListPage.js";
import ProductDetailPage from "../components/ProductDetailPage.js";
import CartPage from "../components/CartPage.js";

const routes = [
  { path: "/web/", component: ProductListPage },
  { path: "/web/products", component: ProductDetailPage },
  { path: "/web/cart", component: CartPage },
];

const routeFind = (path) => {
  return routes.find((route) => route.path === path);
};

export const router = () => {
  let { pathname } = location;

  if (pathname === "/") {
    pathname = "/web/";
  } else if (pathname.includes("/products/")) {
    pathname = "/web/products";
  }

  return routeFind(pathname);
};
