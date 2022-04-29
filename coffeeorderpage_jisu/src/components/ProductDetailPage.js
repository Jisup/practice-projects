export default function ProductDetailPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ProductDetailPage";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    this.$target.innerHTML = `
    <h1>${this.state.name} 상품 정보</h1>
    <div class="ProductDetail">
      <img
        src="${this.state.imageUrl}"
      />
      <div class="ProductDetail__info">
        <h2>${this.state.name}</h2>
        <div class="ProductDetail__price">${this.state.price}원~</div>
        <select>
          <option>선택하세요.</option>
          ${this.state.productOptions.map((option, index) => {
            return `<option data-index="${index} data-stock="${option.stock}">
                      ${option.name}
                      ${option.price ? `(+${option.price})` : ""}
                    </option>`;
          })}
        </select>
        <div class="ProductDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            <li>
              커피잔 100개 번들 10,000원
              <div><input type="number" value="10" />개</div>
            </li>
            <li>
              커피잔 1000개 번들 15,000원
              <div><input type="number" value="5" />개</div>
            </li>
          </ul>
          <div class="ProductDetail__totalPrice">175,000원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
    </div>
    `;
  };
}
