import LazyLoad from "../lib/LazyLoading.js";

export default function SearchResult({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("section");
  this.$target.className = "SearchResult";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    LazyLoad();
  };

  this.render = () => {
    if (this.state.data) {
      this.$target.innerHTML = this.state.data
        .map((cat, index) => {
          return index < 4
            ? `<article class="item" data-index=${index}>
                <img src=${cat.url} alt="${cat.name}" title="${cat.name}"/>
                <div>${cat.name}</div>
              </article>`
            : `<article class="item" data-index=${index}>
                <img class="lazy" data-src=${cat.url} alt="${cat.name}" title="${cat.name}"/>
                <div>${cat.name}</div>
              </article>`;
        })
        .join("");
    }
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $item = e.target.closest(".item");

    if ($item) {
      const { index } = $item.dataset;
      const itemId = this.state.data[parseInt(index, 10)].id;
      this.onClick(index ? itemId : null);
    }
  });

  this.render();
  LazyLoad();
}
