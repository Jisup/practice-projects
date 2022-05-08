import { request } from "./api/api.js";
import { router } from "./router/router.js";

import { getLocalStorage } from "./lib/LocalStorage.js";

export default function App($app) {
  this.router = (data, unused, url) => {
    history.pushState(data, unused, url);
    this.init();
  };
  this.init = async () => {
    $app.innerHTML = "";

    const routerData = router();

    let productData = [];

    try {
      switch (routerData.path) {
        case "/web":
          productData = await request();
          break;
        case "/web/products":
          productData = await request(history.state);
          break;
        case "/web/cart":
          const cartData = JSON.parse(getLocalStorage("products_cart"));
          await cartData.map(async (cart) => {
            const productInfo = await request({ productId: cart.productId });
            const optionInfo = productInfo.productOptions.find(
              (option) => option.id === cart.optionId
            );
            productData.push({
              product: productInfo,
              option: optionInfo,
              quantity: cart.quantity,
            });
          });
          break;
      }
    } catch (e) {
      throw new Error(e.message);
    }

    new routerData.route.component({
      $app,
      initialState: productData,
      onClick: (data, unused, url) => {
        this.router(data, unused, url);
      },
    }).render();
  };
  this.init();

  window.addEventListener("popstate", this.init);
}
