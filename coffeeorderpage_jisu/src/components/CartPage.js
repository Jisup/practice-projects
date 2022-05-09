import { deleteLocalStorage } from "../lib/LocalStorage.js";

export default function CartPage({ $app, initialState, onClick }) {
  this.state = initialState;
  this.totalPrice = 0;
  this.$target = document.createElement("div");
  this.$target.className = "CartPage";
  $app.appendChild(this.$target);

  this.onClick = onClick;

  this.render = () => {
    this.$target.innerHTML = `
      <h1>장바구니</h1>
      <div class="Cart">
        <ul>
          ${this.state
            .map((cart) => {
              const cartPrice = cart.product.price + cart.option.price;
              const totalPrice = cartPrice * cart.quantity;
              this.totalPrice += totalPrice;
              return `
                <li class="Cart__item">
                  <img src="${cart.product.imageUrl}" />
                  <div class="Cart__itemDesription">
                    <div>
                      ${cart.product.name}
                      ${cart.option.name}
                      ${cart.quantity}개
                    </div>
                    <div>${totalPrice.toLocaleString()}</div>
                  </div>
                </li>
              `;
            })
            .join("")}
        </ul>
        <div class="Cart__totalPrice">총 상품가격 ${this.totalPrice.toLocaleString()}원</div>
        <button class="OrderButton">주문하기</button>
      </div>
    `;

    setTimeout(() => {
      if (!this.state || this.state.length === 0) {
        alert("장바구니가 비었습니다.");
        this.onClick(null, null, "/web");
      }
    });
  };

  this.$target.addEventListener("click", (e) => {
    const $buttonItem = e.target.closest(".OrderButton");
    if ($buttonItem) {
      alert("주문 되었습니다.");
      deleteLocalStorage("products_cart");
      this.onClick(null, null, "/web");
    }
  });
}
