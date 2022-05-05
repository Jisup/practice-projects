export default function ProductDetailPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ProductDetailPage";
  $app.appendChild(this.$target);

  this.render = () => {
    if (this.state) {
      this.$target.innerHTML = `
        <h1>${this.state.name} 상품 정보</h1>
        <div class="ProductDetail">
          <img src="${this.state.imageUrl}"/>
          <div class="ProductDetail__info">
            <h2>${this.state.name}</h2>
            <div class="ProductDetail__price">${this.state.price}원~</div>
            <select>
              <option>선택하세요.</option>
              ${this.state.productOptions
                .map((option, index) => {
                  return `
                  <option class="valuable" data-index="${index}" ${
                    option.stock === 0
                      ? `disabled`
                      : `data-stock="${option.stock}"`
                  }>
                    ${option.stock === 0 ? `(품절)` : ""}
                    ${option.name}
                    ${option.price ? `(+${option.price.toLocaleString()})` : ""}
                    </option>
                  `;
                })
                .join("")}
            </select>
            <div class="ProductDetail__selectedOptions">
              <h3>선택된 상품</h3>
              <ul>
              </ul>
              <div class="ProductDetail__totalPrice">175,000원</div>
              <button class="OrderButton">주문하기</button>
            </div>
          </div>
        </div>
      `;
    }
  };

  this.$target.addEventListener("click", (e) => {
    const $selectItem = e.target.closest("select");

    if ($selectItem) {
      const $optionItem = $selectItem[$selectItem.selectedIndex];

      console.log($optionItem);

      const { index, stock } = $selectItem.dataset;

      if (stock === 0) return;

      if (index) {
        const optionData = this.state[index];
        console.log(optionData);
        const $selectedOptions = document.querySelector(
          ".ProductDetail__selectedOptions > ul"
        );
        $selectedOptions.innerHTML = `
        <li>
          ${this.state.price}
          커피잔 100개 번들 10,000원
          <div><input type="number" value="10" />개</div>
        </li>
      `;
      }
    }
  });
}
