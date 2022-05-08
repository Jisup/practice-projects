import ProductListPage from "../components/ProductListPage.js";
import ProductDetailPage from "../components/ProductDetailPage.js";
import CartPage from "../components/CartPage.js";

const routes = [
  { path: "/", component: ProductListPage },
  { path: "/web", component: ProductListPage },
  { path: "/web/products", component: ProductDetailPage },
  { path: "/web/cart", component: CartPage },
];

const routeFind = (path) => {
  return routes.find((route) => route.path === path);
};

export const router = () => {
  let { pathname } = location;

  var route = {};
  var path = "";

  if (pathname === "/" || pathname === "/web") {
    path = "/web";
  } else if (pathname.includes("/products/")) {
    path = "/web/products";
  } else if (pathname === "/web/cart") {
    path = "/web/cart";
  }
  route = routeFind(path);

  return { route, path };
};
