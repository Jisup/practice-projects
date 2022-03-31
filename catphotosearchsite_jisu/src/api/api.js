const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (keyword) => {
  const res = await fetch(
    `${API_ENDPOINT}/api/cats${keyword ? `/search?q=${keyword}` : `/random50`}`
  );
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
