const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (type, payload) => {
  var API_SUBPOINT = "";
  switch (type) {
    case "search":
      API_SUBPOINT = `/search?q=${payload}`;
      break;
    case "random":
      API_SUBPOINT = `/random50`;
      break;
    default:
      API_SUBPOINT = `/${payload}`;
  }
  const res = await fetch(`${API_ENDPOINT}/api/cats${API_SUBPOINT}`);
  switch (res.state / 100) {
    case 3:
      return `Redirects Error with status code ${res.status}`;
    case 4:
      return `Client Error with status code ${res.status}`;
    case 5:
      return `Server Error with status code ${res.status}`;
    default:
      return res.json();
  }
};
