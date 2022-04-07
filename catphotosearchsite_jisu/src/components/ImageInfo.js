export default function ImageInfo({ $app, initialState, onBackClick }) {
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

      this.$target.classList.add("fadein");
    }
    this.$target.style.display = this.state.visible ? "block" : "none";
  };

  this.onBackClick = onBackClick;

  const fadeOutEffect = () => {
    this.$target.classList.add("fadeout");
    const fadeEffect = setInterval(() => {
      if (this.$target.classList.contains("fadein")) {
        this.$target.classList.remove("fadein");
      }
      if (this.$target.style.opacity == 0) {
        this.$target.classList.remove("fadeout");
        clearInterval(fadeEffect);
        this.onBackClick();
      }
    }, 500);
  };

  this.$target.addEventListener("keyup", (e) => {
    console.log("키다운 눌렸따");
    if (e.keyCode === 27) {
      console.log("진짜 눌렷따");
      fadeOutEffect();
    }
  });

  this.$target.addEventListener("click", (e) => {
    const $className = e.target.classList;
    if ($className.contains("ImageInfo") || $className.contains("close")) {
      fadeOutEffect();
    }
  });

  this.render();
}
