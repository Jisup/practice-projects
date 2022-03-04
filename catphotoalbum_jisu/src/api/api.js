// Promise객체는 HTTP Error상태를 보여주지 않아 status code로 구분하여 오류를 명시함
// result에 대해 ok로 확인 가능하다.
// 아래 두 구현방법이 존재한다.

const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (nodeId) => {
  try {
    const res = await fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`);
    if (!res.ok) {
      throw new Error("Server is Dangerous");
    }
    return await res.json();
  } catch (e) {
    throw new Error(`Something is wrong! ${e.message}`);
  }
};

export const request_chain = (nodeId) => {
  fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Server Error");
      }
      console.log(response.json());
      return response.json();
    })
    .catch((e) => {
      throw new Error(`Something is wrong! ${e.message}`);
    });
};

export const request_switch = async (nodeId) => {
  try {
    const res = await fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`);
    switch (res / 100) {
      case 5:
        throw new Error(`Code ${res.status} : Server Error`);
      case 4:
        throw new Error(`Code ${res.status} : Client Error`);
      case 3:
        throw new Error(`Code ${res.status} : Redirection Error`);
      default:
        return res.json();
    }
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};

const api = {
  fetchRoot() {
    return request();
  },

  fetchDirectory(nodeId) {
    return request(nodeId);
  },
};
