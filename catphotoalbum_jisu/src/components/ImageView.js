const IMAGE_BASE_URL =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

export default function ImageView({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "Modal Loading";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
      <div class="content">
        ${this.state ? `<img src="${IMAGE_BASE_URL}${this.state}" />` : ""}
      </div>
    `;
    this.$target.style.display = this.state ? "block" : "none";
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", () => {
    this.onClick();
  });

  this.render();
}
