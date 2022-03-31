import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";

import { request } from "./api/api.js";

export default function App($app) {
  this.state = {
    visible: false,
    image: null,
    data: [],
  };

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const searchData = await request.fetchCats(keyword);
      this.setState({
        ...this.state,
        data: searchData,
      });
    },
  });
  searchInput;

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

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state.data);
    imageInfo.setState(this.state);
  };
}
