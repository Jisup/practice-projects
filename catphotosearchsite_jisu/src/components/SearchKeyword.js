export default function SearchKeyword({ $app, initalState, onClick }) {
  this.state = initalState;
  this.$target = document.createElement("buttons");
  this.$target.className = "SearchKeyword";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state) {
      this.$target.innerHTML = this.state
        .map((keyword) => {
          return `
            <button class="Keyword" data-keyword="${keyword}">
              ${keyword}
            </button>
          `;
        })
        .join("");
    }
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $keywordItem = e.target.closest(".Keyword");
    if ($keywordItem) {
      const { keyword } = $keywordItem.dataset;

      const $input = document.querySelector(".SearchInput");
      $input.value = keyword;

      this.onClick(keyword);
    }
  });

  this.render();
}
