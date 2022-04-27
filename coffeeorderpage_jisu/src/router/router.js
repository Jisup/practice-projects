import ProductListPage from '../components/ProductListPage.js';
import ProductDetailPage from '../components/ProductDetailPage.js';
import CartPage from '../components/CartPage.js';

const routes = [
  { path: '/', component: ProductListPage },
  { path: '/web', component: ProductListPage },
  { path: '/products/', component: ProductDetailPage },
  { path: '/cart', component: CartPage },
];

export const router = () => {
  let { pathname } = location;
  var route = {};

  if (pathname === '/' || pathname === '/web') {
    route = routes.find((route) => route.path === '/web');
  } else if (pathname.includes('/products/')) {
    route.path = pathname;
    route.component = routes.find((route) => route.path === '/products/').component;
  } else if (pathname === '/cart') {
    route = routes.find((route) => route.path === '/cart');
  }

  return route;
};
