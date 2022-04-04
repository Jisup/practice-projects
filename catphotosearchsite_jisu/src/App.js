import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";
import SearchKeyword from "./components/SearchKeyword.js";

import { request } from "./api/api.js";

const cache = {};

export default function App($app) {
  this.state = {
    visible: false,
    loading: false,
    image: null,
    data: [],
    keyword: ["a", "b", "c", "d", "e"],
  };

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const searchData = await request("search", keyword);
      localStorage.setItem("lastSearchData", JSON.stringify(searchData));

      var nextKeyword = [keyword, ...this.state.keyword];

      if (nextKeyword.length > 5) {
        nextKeyword = nextKeyword.slice(0, 5);
      }

      this.setState({
        ...this.state,
        data: searchData,
        keyword: nextKeyword,
      });
    },
  });

  const searchKeyword = new SearchKeyword({
    $app,
    initalState: this.state.keyword,
    onClick: async (keyword) => {
      const keywordData = await request("search", keyword);
      localStorage.setItem("lastSearchData", JSON.stringify(keywordData));

      const nextKeyword = [
        keyword,
        ...this.state.keyword.filter((word) => word != keyword),
      ];

      this.setState({
        ...this.state,
        data: keywordData,
        keyword: nextKeyword,
      });
    },
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
    searchKeyword.setState(this.state.keyword);
    searchResult.setState(this.state.data);
    imageInfo.setState(this.state);
    loading.setState(this.state.loading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });

    const storage = JSON.parse(localStorage.getItem("lastSearchData"));
    console.log(storage);
    const initData = storage ? storage : await request("random");
    localStorage.setItem("lastSearchData", JSON.stringify(initData));

    this.setState({
      ...this.state,
      loading: false,
      data: initData.data,
    });
  };
  init();
}
