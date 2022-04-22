import ProductListPage from "../components/ProductListPage.js";
import ProductDetailPage from "../components/ProductDetailPage.js";
import CartPage from "../components/CartPage.js";

export const router = async () => {
  const routes = [
    { path: "/web", view: ProductListPage },
    { path: "/web/products/:productId", view: ProductListPage },
    { path: "/cart", view: ProductListPage },
  ];

  let { pathname } = location;
};
