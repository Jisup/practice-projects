import { getLocalStorage, setLocalStorage } from "../lib/LocalStorage.js";

export default function ProductDetailPage({ $app, initialState, onClick }) {
  this.state = initialState;
  this.state.index = [];
  this.state.totalPrice = [];
  this.$target = document.createElement("div");
  this.$target.className = "ProductDetailPage";
  $app.appendChild(this.$target);

  this.render = () => {
    if (this.state) {
      console.log(this.state);
      this.$target.innerHTML = `
        <h1>${this.state.name} 상품 정보</h1>
        <div class="ProductDetail">
          <img src="${this.state.imageUrl}"/>
          <div class="ProductDetail__info">
            <h2>${this.state.name}</h2>
            <div class="ProductDetail__price">${this.state.price.toLocaleString()}원~</div>
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
                    ${this.state.name} 
                    ${option.name}
                    ${option.price ? `(+${option.price.toLocaleString()})` : ""}
                    </option>
                  `;
                })
                .join("")}
            </select>
            <div class="ProductDetail__selectedOptions">
              <h3>선택된 상품</h3>
              <ul></ul>
              <div class="ProductDetail__totalPrice"></div>
              <button class="OrderButton">주문하기</button>
            </div>
          </div>
        </div>
      `;
    }
  };

  this.$target.addEventListener("click", (e) => {
    const $selectItem = e.target.closest("select");
    const $buttonItem = e.target.closest(".OrderButton");

    if ($selectItem) {
      selectItemRender($selectItem);
    }
    if ($buttonItem) {
      buttonClickEvent();
    }
  });

  const selectItemRender = ($selectItem) => {
    const $optionItem = $selectItem[$selectItem.selectedIndex];

    const { index } = $optionItem.dataset;

    if (!this.state.totalPrice[index]) {
      const optionData = this.state.productOptions[index];
      if (optionData === undefined) return;

      const $selectedOptions = document.querySelector(
        ".ProductDetail__selectedOptions > ul"
      );

      const $liTemplate = document.createElement("li");
      $liTemplate.innerHTML = `
        ${optionData.name}
        ${(this.state.price + optionData.price).toLocaleString()}원
        <div>
          <input data-index="${index}" type="number" value="1"
                min="1" max="${optionData.stock}" />개
        </div>
      `;
      $liTemplate.addEventListener("focusout", (e) => {
        inputItemRender(e.target);
      });

      $selectedOptions.appendChild($liTemplate);

      this.state.totalPrice[index] = {
        price: this.state.price + optionData.price,
        value: 1,
      };

      totalPriceRender();
    }
  };

  const totalPriceRender = () => {
    const $totalPrice = document.querySelector(".ProductDetail__totalPrice");
    var calcPrice = 0;
    this.state.totalPrice.map((item) => (calcPrice += item.price * item.value));
    $totalPrice.innerHTML = `${calcPrice.toLocaleString()}원`;
  };

  const inputItemRender = ($inputItem) => {
    if (parseInt($inputItem.value) < parseInt($inputItem.min))
      $inputItem.value = $inputItem.min;
    if (parseInt($inputItem.value) > parseInt($inputItem.max))
      $inputItem.value = $inputItem.max;

    const { index } = $inputItem.dataset;
    this.state.totalPrice[index].value = $inputItem.value;

    totalPriceRender();
  };

  this.onClick = onClick;

  const buttonClickEvent = () => {
    const $inputItems = [].slice.call(document.querySelectorAll("input"));
    if ($inputItems) {
      let cartData = JSON.parse(getLocalStorage("products_cart"));
      cartData = cartData ? cartData : [];

      $inputItems.map((inputItem) => {
        const { index } = inputItem.dataset;
        const quantity = parseInt(inputItem.value);
        const inputData = {
          productId: this.state.id,
          optionId: this.state.productOptions[index].id,
          quantity: quantity,
        };
        if (cartData.length !== 0) {
          const searchIndex = cartData.findIndex(
            (cart) =>
              cart.productId == inputData.productId &&
              cart.optionId == inputData.optionId
          );
          if (searchIndex != -1) {
            cartData[searchIndex].quantity += inputData.quantity;
            return;
          }
        }
        cartData.push(inputData);
      });

      setLocalStorage(JSON.stringify(cartData));
    }
    this.onClick(null, null, "/web/cart");
  };
}
