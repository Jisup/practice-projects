export default function CartPage({ $app, initialState }) {
  this.state = initialState;
  this.totalPrice = 0;
  this.$target = document.createElement("div");
  this.$target.className = "CartPage";
  $app.appendChild(this.$target);

  this.render = () => {
    if (this.state) {
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
    }
  };

  // <li class="Cart__item">
  //   <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
  //   <div class="Cart__itemDesription">
  //     <div>커피잔 100개 번들 10,000원 10개</div>
  //     <div>100,000원</div>
  //   </div>
  // </li>;
}
