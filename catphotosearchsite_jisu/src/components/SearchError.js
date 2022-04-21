export default function SearchError({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("article");
  this.$target.className = "SearchError";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `냐옹이들이 없어요. ┃ `;
    this.$target.style.display = this.state ? "block" : "none";
  };

  this.render();
}
