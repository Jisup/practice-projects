import { router } from './router/router.js';

export default function App($app) {
  const buttonCreate = () => {
    this.$button1 = document.createElement('button');
    this.$button1.innerHTML = '상품목록';
    this.$button1.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, null, '/web');
      init();
    });

    this.$button2 = document.createElement('button');
    this.$button2.innerHTML = '커피잔 상품 정보';
    this.$button2.addEventListener('click', (e) => {
      // const { productId } = e.target.dataset;
      const productId = 1;
      e.preventDefault();
      history.pushState({ productId }, null, `/web/products/${productId}`);
      init();
    });

    this.$button3 = document.createElement('button');
    this.$button3.innerHTML = '장바구니';
    this.$button3.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, null, '/cart');
      init();
    });

    $app.appendChild(this.$button1);
    $app.appendChild(this.$button2);
    $app.appendChild(this.$button3);
  };
  const init = () => {
    $app.innerHTML = '';
    buttonCreate();
    const route = router();
    console.log(route);
    console.log(route.path);
    console.log(route.component);
    console.log($app);
    new route.component({
      $app,
      initialState: [],
    }).render();
  };
  init();

  window.addEventListener('popstate', init);
}
