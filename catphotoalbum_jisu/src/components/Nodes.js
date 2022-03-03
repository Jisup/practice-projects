export default function Nodes({ $app, initialState, onClick }) {
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
          return `
      <div class="Node" data-node-id="${node.id}">
        <img src="${iconPath}" />
        <div>${node.name}</div>
      </div>
      `;
        })
        .join("");
    }
    //렌더링 된 이후, 모든 클릭가능한 요소에 이벤트 추가
    this.$target.querySelectorAll(".Node").forEach(($node) => {
      $node.addEventListener("click", (e) => {
        //dataset을 통해 [data-]로 시작하는 attribute를 꺼내 올 수 있음
        const { nodeId } = e.target.dataset;
        const selectedNode = this.state.nodes.find(
          (node) => node.id === nodeId
        );
        if (selectedNode) {
          this.onClick(selectedNode);
        }
      });
    });
    //이벤트 요소 추가 후 재 랜더링
    this.render();
  };
}
