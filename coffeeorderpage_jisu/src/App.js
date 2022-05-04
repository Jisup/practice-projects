import { request } from "./api/api.js";
import { router } from "./router/router.js";

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
        case "/cart":
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

  window.addEventListener("popstate", this.router);
}
