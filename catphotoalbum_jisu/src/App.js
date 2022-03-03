import Breadcrumb from "./components/Breadcrumb.js";
import BreadcrumbBack from "./components/Breadcrumb-back.js";
import Nodes from "./components/Nodes.js";

export default function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
  };

  // 아래처럼 breadcrumb, nodes, imageview, loading 등 구성하면
  // 해당 컴포넌트들은 독립적으로 구성되고, 쉽게 재활용 가능해짐
  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
  });

  const nodes = new Nodes({
    $app,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: (node) => {
      if (node.type === "DIRECTORY") {
      } else if (node.type === "FILE") {
      }
    },
  });
}
