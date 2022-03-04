export default function Nodes({ $app, initialState, onClick, onBackClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "Nodes";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map((node) => {
          const iconPath =
            node.type === "FILE"
              ? "./assets/file.png"
              : "./assets/directory.png";
          return `<div class="Node">
          <img src="${iconPath}"/>
          <div>${node.name}</div>
        </div>`;
        })
        .join("");
      this.$target.innerHTML = !this.state.isRoot
        ? `
            <div class="Node">
              <img src="./assets/prev.png />
            </div>${nodesTemplate}
          `
        : nodesTemplate;
    }
  };

  this.render();
}
