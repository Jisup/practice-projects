import ProductListPage from "../components/ProductListPage.js";
import ProductDetailPage from "../components/ProductDetailPage.js";
import CartPage from "../components/CartPage.js";

const routes = [
  { path: "/", component: ProductListPage },
  { path: "/web", component: ProductListPage },
  { path: "/products", component: ProductDetailPage },
  { path: "/cart", component: CartPage },
];

const routeFind = (path) => {
  return routes.find((route) => route.path === path);
};

export const router = () => {
  let { pathname } = location;

  var route = {};
  var routeData = null;
  var path = "";

  if (pathname === "/" || pathname === "/web") {
    path = "/web";
    route = routeFind(path);
  } else if (pathname.includes("/products/")) {
    path = "/products";
    route = routeFind(path);
    route.path = pathname;

    const temp = pathname.slice("/");
    routeData = { productId: temp[temp.lastIndexOf()] };
  } else if (pathname === "/cart") {
    path = "/cart";
    route = routeFind(path);
  }

  history.pushState(routeData, null, pathname);

  return { route, path };
};
