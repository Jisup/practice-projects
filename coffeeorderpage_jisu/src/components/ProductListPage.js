export default function ProductListPage({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ProductListPage";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h1>상품목록</h1>
      <ul>
      ${this.state
        .map((product) => {
          return `
            <li class="Product" data-product-id=${product.id}>
              <img src="${product.imageUrl}"/>
              <div class="Product__info">
                <div>${product.name}</div>
                <div>${product.price}원~</div>
              </div>
            </li>
        `;
        })
        .join("")}
      </ul>
    `;
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $liItem = e.target.closest(".Product");
    if ($liItem) {
      const { productId } = $liItem.dataset;

      this.onClick({ productId }, null, `/web/products/${productId}`);
    }
  });
}
