export default function Loading({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "Loading";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
      <div class="content">
        <div class="loading">Loading ...</div>
      </div>
    `;

    this.$target.style.display = this.state ? "block" : "none";
  };

  this.render();
}
