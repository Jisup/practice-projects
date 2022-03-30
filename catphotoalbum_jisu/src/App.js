import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";
import ImageView from "./components/ImageView.js";
import Loading from "./components/Loading.js";

import { request } from "./api/api.js";

const cache = {};

export default function App($app) {
  this.state = {
    isRoot: false,
    isLoading: false,
    depth: [],
    nodes: [],
  };

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
    onClick: async (index) => {
      if (index === this.state.depth.length - 1) {
        return;
      }

      this.setState({
        ...this.state,
        isLoading: true,
      });

      if (index === null) {
        this.setState({
          ...this.state,
          isRoot: true,
          isLoading: false,
          depth: [],
          nodes: cache.root,
        });
        return;
      }

      const indexState = { ...this.state };
      const indexDepth = indexState.depth.slice(0, index + 1);
      const indexNodeId = indexState.depth[index].id;

      this.setState({
        ...indexState,
        isLoading: false,
        depth: indexDepth,
        nodes: cache[indexNodeId],
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
          if (cache[node.id]) {
            this.setState({
              ...this.state,
              isRoot: false,
              isLoading: false,
              depth: [...this.state.depth, node],
              nodes: cache[node.id],
            });
          } else {
            const nextNodes = await request(node.id);
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
            isLoading: false,
            imageFilePath: node.filePath,
          });
        }
      } catch (e) {
        throw new Error(e.message);
      }
    },
    onBackClick: async () => {
      this.setState({
        ...this.state,
        isLoading: true,
      });
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
          nodes: cache.root,
        });
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          nodes: cache[prevNodeId],
        });
      }
    },
  });
  const imageview = new ImageView({
    $app,
    initialState: this.state.imageFilePath,
    onClick: () => {
      this.setState({
        ...this.state,
        imageFilePath: null,
      });
    },
  });
  const loading = new Loading({
    $app,
    initialState: this.isLoading,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
    imageview.setState(this.state.imageFilePath);
    loading.setState(this.state.isLoading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const rootNodes = await request();
    this.setState({
      ...this.state,
      isRoot: true,
      isLoading: false,
      nodes: rootNodes,
    });
    cache.root = rootNodes;
  };
  init();
}
