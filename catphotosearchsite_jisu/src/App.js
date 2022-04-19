import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchKeyword from "./components/SearchKeyword.js";
import SearchError from "./components/SearchError.js";

import ImageInfo from "./components/ImageInfo.js";
import ImageBanner from "./components/ImageBanner.js";

import Loading from "./components/Loading.js";
import DarkMode from "./components/DarkMode.js";

import { request } from "./api/api.js";
import { getLocalStorage, setLocalStorage } from "./lib/LocalStorage.js";

const cache = {};

export default function App($app) {
  this.state = {
    visible: false,
    loading: false,
    error: false,
    image: null,
    data: [],
    banner: [],
    keyword: [],
  };

  const darkmode = new DarkMode({
    $app,
  });

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      this.setState({
        ...this.state,
        loading: true,
      });
      try {
        const searchData = await request("search", keyword);

        if (!searchData.data || !searchData.data.length) {
          this.setState({
            ...this.state,
            loading: false,
            data: [],
            error: true,
          });
          return;
        }

        setLocalStorage(searchData);

        var nextKeyword = [keyword, ...this.state.keyword];

        if (nextKeyword.length > 5) {
          nextKeyword = nextKeyword.slice(0, 5);
        }

        this.setState({
          ...this.state,
          data: searchData.data,
          keyword: nextKeyword,
          loading: false,
          error: false,
        });
      } catch (e) {
        this.setState({
          ...this.state,
          loading: false,
        });
        throw new Error(e.message);
      }
    },
    onClick: async () => {
      this.setState({
        ...this.state,
        loading: true,
      });
      try {
        const randomData = await request("random");
        setLocalStorage(randomData);

        this.setState({
          ...this.state,
          data: randomData.data,
          loading: false,
        });
      } catch (e) {
        this.setState({
          ...this.state,
          loading: false,
        });
        throw new Error(e.message);
      }
    },
  });

  const searchKeyword = new SearchKeyword({
    $app,
    initalState: this.state.keyword,
    onClick: async (keyword) => {
      this.setState({
        ...this.state,
        loading: true,
      });
      try {
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
          loading: false,
        });
      } catch (e) {
        this.setState({
          ...this.state,
          loading: false,
        });
        throw new Error(e.message);
      }
    },
  });

  const imageBanner = new ImageBanner({
    $app,
    initialState: [],
  });

  const searchResult = new SearchResult({
    $app,
    initialState: [],
    onClick: async (catId) => {
      this.setState({
        ...this.state,
        loading: true,
      });
      try {
        const imageData = await request("", catId);

        this.setState({
          ...this.state,
          visible: true,
          loading: false,
          image: imageData.data,
        });
      } catch (e) {
        this.setState({
          ...this.state,
          loading: false,
        });
        throw new Error(e.message);
      }
    },
  });

  const imageInfo = new ImageInfo({
    $app,
    initialState: {
      visible: false,
      image: null,
    },
    onBackClick: () => {
      this.setState({
        ...this.state,
        visible: false,
        image: null,
      });
    },
  });

  const loading = new Loading({
    $app,
    initialState: this.state.loading,
  });

  const searchError = new SearchError({
    $app,
    initialState: this.state.error,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    searchKeyword.setState(this.state.keyword);
    imageBanner.setState(this.state.banner);
    searchResult.setState({
      data: this.state.data,
      error: this.state.error,
    });
    searchError.setState(this.state.error);
    imageInfo.setState({
      image: this.state.image,
      visible: this.state.visible,
    });
    loading.setState(this.state.loading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      const storage = getLocalStorage();
      const initData = await request("random");

      if (!storage || !storage.data || !storage.data.length) {
        setLocalStorage(initData);
      }

      this.setState({
        ...this.state,
        loading: false,
        banner: storage ? storage.data : initData.data,
      });
    } catch (e) {
      this.setState({
        ...this.state,
        loading: false,
      });
      throw new Error(e.message);
    }
  };
  init();
}
