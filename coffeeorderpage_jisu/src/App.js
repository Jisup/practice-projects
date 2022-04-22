import ProductListPage from "./components/ProductListPage.js";
import ProductDetailPage from "./components/ProductDetailPage.js";
import CartPage from "./components/CartPage.js";

export default function App($app) {
  this.state = {
    product: [],
  };

  const productListPage = new ProductListPage({
    $app,
    initialState,
  });

  const productDetailPage = new ProductDetailPage({
    $app,
    initialState,
  });

  const cartPage = new CartPage({
    $app,
    initialState,
  });

  this.setState = (nextState) => {
    productListPage.setState();
    productDetailPage.setState();
    cartPage.setState();
  };

  const init = () => {};
  init();
}
