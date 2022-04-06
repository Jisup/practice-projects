import LazyLoad from "../lib/LazyLoading.js";

export default function SearchResult({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "SearchResult";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    LazyLoad();
  };

  this.render = () => {
    this.$target.innerHTML = this.state
      .map((cat, index) => {
        return index < 4
          ? `<div class="item" data-index=${index}>
              <img src=${cat.url} alt="${cat.name}"/>
              <div>${cat.name}</div>
            </div>`
          : `<div class="item" data-index=${index}>
              <img class="lazy" data-src=${cat.url} alt="${cat.name}"/>
              <div>${cat.name}</div>
            </div>`;
      })
      .join("");
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $item = e.target.closest(".item");

    //여기 요소가 잡히지 않을 때 오류처리해야함
    const index = parseInt($item.dataset, 10);

    this.onClick(index);
    //this.onClick(this.state[index]);
  });

  this.render();
  LazyLoad();
}
