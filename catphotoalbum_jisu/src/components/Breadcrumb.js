export default function Breadcrumb({ $app, initialState = [], onClick }) {
  this.state = initialState;
  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    console.log("Breadcrumb", nextState);
    this.render();
  };
  // state를 기준으로 렌더링 하는 코드
  // Nodes에서 일어나는 Interection에 의해 영향을 받음
  // 의존성을 줄이고 독립성을 높이기 위해 상위컴포넌트를 만들어 콜백함수를 통해 느슨한 결합을 이용함
  this.render = () => {
    this.$target.innerHTML = `
      <div class="nav-item">root</div>
      ${this.state
        .map((node, index) => {
          `<div class="nav-item" data-index="${index}">${node.name}</div>`;
        })
        .join("")}`;
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $navItem = e.target.closest(".nav-item");
    if ($navItem) {
      const { index } = $navItem.dataset;
      this.onClick(index ? parseInt(index, 10) : null);
    }
  });
  this.render();
}
