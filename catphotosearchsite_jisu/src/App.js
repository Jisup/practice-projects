import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";

import { request } from "./api/api.js";
import SearchKeyword from "./components/SearchKeyword.js";

const cache = {};

export default function App($app) {
  this.state = {
    visible: false,
    loading: false,
    image: null,
    data: [],
    keyword: [],
  };

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const searchData = await request.fetchCats("search", keyword);
      this.setState({
        ...this.state,
        data: searchData,
      });
    },
  });

  const searchKeyword = new SearchKeyword({
    $app,
    initalState: this.state.keyword,
  });

  const searchResult = new SearchResult({
    $app,
    initialState: this.state,
    onClick: (image) => {
      this.imageInfo.setState({
        visible: true,
        image,
      });
    },
  });

  const imageInfo = new ImageInfo({
    $app,
    initialState: {
      visible: false,
      image: null,
    },
  });

  const loading = new Loading({
    $app,
    initialState: this.state.loading,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state.data);
    imageInfo.setState(this.state);
    loading.setState(this.state.loading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });
    const initData = await request("random");
    this.setState({
      ...this.state,
      loading: false,
      data: initData.data,
    });
  };
  init();
}
