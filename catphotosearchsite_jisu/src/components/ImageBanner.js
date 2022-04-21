export default function ImageBanner({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("section");
  this.$target.className = "SlideShow";

  this.$prev = document.createElement("span");
  this.$prev.className = "prev";
  this.$prev.innerHTML = `&lang;`;

  this.$slide = document.createElement("ul");
  this.$slide.className = "Slides";

  this.$next = document.createElement("span");
  this.$next.className = "next";
  this.$next.innerHTML = `&rang;`;

  this.$target.appendChild(this.$prev);
  this.$target.appendChild(this.$slide);
  this.$target.appendChild(this.$next);

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$slide.innerHTML = this.state
      .slice(0, 5)
      .map((cat, index) => {
        return `<li><img src="${cat.url}" title="${cat.name}" data-index="${index}"/></li>`;
      })
      .join("");
  };
  const changeSlides = (type) => {
    type = type === "prev" ? true : false;

    const $slide = document.querySelector("ul");
    const $slideChild = $slide.querySelector(
      type ? "li:last-child" : "li:first-child"
    );
    const $slideImg = $slideChild.querySelector("img");
    const { index } = $slideImg.dataset;

    const idx = parseInt(index, 10) + (type ? -5 : +5);
    if (idx >= 0 && idx < this.state.length) {
      $slideChild.remove();

      const $slideItem = document.createElement("li");
      $slideItem.innerHTML = `
      <img src="${this.state[idx].url}" title="${this.state[idx].name}" data-index="${idx}"/>
    `;
      type ? $slide.prepend($slideItem) : $slide.appendChild($slideItem);
    }
  };

  this.$prev.addEventListener("click", () => {
    changeSlides("prev");
  });
  this.$next.addEventListener("click", () => {
    changeSlides("next");
  });

  this.render();
}
