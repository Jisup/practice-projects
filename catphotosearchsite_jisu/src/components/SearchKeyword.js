export default function SearchKeyword({ $app, initalState }) {
  this.state = initalState;
  this.$target = document.createElement("div");
  this.$target.className = "SearchKeyword";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
      <button class="keyword">디두디두디</button>
      <button class="keyword">디두디두디</button>
      <button class="keyword">디두디두디</button>
    `;
  };

  this.render();
}
