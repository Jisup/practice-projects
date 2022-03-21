import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";
import ImageView from "./components/ImageView.js";
import { request } from "./api/api.js";
import Loading from "./components/Loading.js";

const cache = {};

export default function App($app) {
  this.state = {
    isRoot: false,
    isLoading: false,
    nodes: [],
    depth: [],
  };

  // 아래처럼 breadcrumb, nodes, imageview, loading 등 구성하면
  // 해당 컴포넌트들은 독립적으로 구성되고, 쉽게 재활용 가능해짐
  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
    onClick: (index) => {
      if (index === null) {
        this.setState({
          ...this.state,
          depth: [],
          nodes: cache.root,
        });
        return;
      }
      if (index === this.state.depth.length - 1) {
        return;
      }
      const nextState = { ...this.state };
      const nextDepth = this.state.depth.slice(0, index + 1);

      this.setState({
        ...nextState,
        depth: nextDepth,
        nodes: cache[nextDepth[nextDepth.length - 1].id],
      });
    },
  });

  const nodes = new Nodes({
    $app,
    initialState: [],
    onClick: async (node) => {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      try {
        if (node.type === "DIRECTORY") {
          const nextNodes = await request(node.id);
          if (cache[node.id]) {
            this.setState({
              ...this.state,
              isRoot: false,
              isLoading: false,
              depth: [...this.state.depth, node],
              nodes: nextNodes,
            });
          } else {
            this.setState({
              ...this.state,
              isRoot: false,
              isLoading: false,
              depth: [...this.state.depth, node],
              nodes: nextNodes,
            });
            cache[node.id] = nextNodes;
          }
        } else if (node.type === "FILE") {
          this.setState({
            ...this.state,
            isRoot: false,
            isLoading: false,
            selectedFilePath: node.filePath,
          });
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    onBackClick: async () => {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      try {
        const nextState = { ...this.state };
        nextState.depth.pop();
        const prevNodeId =
          nextState.depth.length === 0
            ? null
            : nextState.depth[nextState.depth.length - 1].id;
        if (prevNodeId === null) {
          this.setState({
            ...this.state,
            isRoot: true,
            isLoading: false,
            selectedFilePath: null,
            nodes: cache.root,
          });
        } else {
          this.setState({
            ...this.state,
            isRoot: false,
            isLoading: false,
            selectedFilePath: null,
            nodes: cache[prevNodeId],
          });
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  });

  const imageview = new ImageView({
    $app,
    initialState: this.state.selectedNodeImage,
  });

  const loading = new Loading({
    $app,
    initialState: this.state.isLoading,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
    loading.setState(this.state.isLoading);
    imageview.setState(this.state.selectedFilePath);
  };
  const init = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    try {
      const rootNodes = await request();
      this.setState({
        ...this.state,
        isRoot: true,
        isLoading: false,
        nodes: rootNodes,
      });
      cache.root = rootNodes;
    } catch (e) {
      throw new Error(e);
    }
  };

  init();
}
