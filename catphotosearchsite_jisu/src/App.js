import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";
import SearchKeyword from "./components/SearchKeyword.js";

import { request } from "./api/api.js";

const cache = {};

const setLocalStorage = (data) => {
  localStorage.setItem("lastSearchData", JSON.stringify(data));
};

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
      try {
        const searchData = await request("search", keyword);
        setLocalStorage(searchData);

        var nextKeyword = [keyword, ...this.state.keyword];

        if (nextKeyword.length > 5) {
          nextKeyword = nextKeyword.slice(0, 5);
        }

        this.setState({
          ...this.state,
          data: searchData.data,
          keyword: nextKeyword,
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
    onClick: async () => {
      try {
        const randomData = await request("random");
        setLocalStorage(randomData);

        this.setState({
          ...this.state,
          data: randomData.data,
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
  });

  const searchKeyword = new SearchKeyword({
    $app,
    initalState: this.state.keyword,
    onClick: async (keyword) => {
      const keywordData = await request("search", keyword);
      setLocalStorage(keywordData);

      const nextKeyword = [
        keyword,
        ...this.state.keyword.filter((word) => word != keyword),
      ];

      this.setState({
        ...this.state,
        data: keywordData.data,
        keyword: nextKeyword,
      });
    },
  });

  const searchResult = new SearchResult({
    $app,
    initialState: [],
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

    try {
      const storage = JSON.parse(localStorage.getItem("lastSearchData"));
      const initData = await request("random");

      if (!storage) {
        setLocalStorage(initData);
      }

      this.setState({
        ...this.state,
        loading: false,
        data: storage ? storage.data : initData.data,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  init();
}
