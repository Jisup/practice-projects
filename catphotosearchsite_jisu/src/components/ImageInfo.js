export default function ImageInfo({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ImageInfo";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.image) {
      const { name, url, temperament, origin } = this.state.image;

      this.$target.innerHTML = `
      <div class="content-wrapper">
        <div class="title">
          <span>${name}</span>
          <div class="close">x</div>
        </div>
        <img src="${url}" alt="${name}"/>        
        <div class="description">
          <div>성격: ${temperament}</div>
          <div>태생: ${origin}</div>
        </div>
      </div>
    `;
    }
    this.$target.style.display = this.state.visible ? "block" : "none";
  };
  this.render();
}
