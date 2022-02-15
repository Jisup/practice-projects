import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./Main";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let 초기값 = [
  { id: 0, title: "멋진신발", quan: 2 },
  { id: 1, title: "예쁜신발", quan: 1 },
  { id: 2, title: "귀여운신발", quan: 4 },
];

function reducer(state = 초기값, 액션) {
  // state 데이터의 수정방법을 정의
  // reducer는 수정된 state를 반환하는 함수

  if (액션.type === "항목추가") {
    let copy = [...state];
    if (copy.find((상품) => 상품.title === 액션.payload.title)) {
      alert("장바구니에 담긴 상품이므로 수량을 증가합니다");
      copy[copy.indexOf(copy.find((상품) => 상품.title === 액션.payload.title))]
        .quan++;
    } else {
      let temp = 액션.payload;
      temp.id = state.length;
      copy.push(temp);
    }

    return copy;
  } else if (액션.type === "수량증가") {
    let copy = [...state];
    copy[액션.payload].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    if (copy[액션.payload].quan > 0) {
      copy[액션.payload].quan--;
    }
    return copy;
  } else {
    return state;
  }
}

/* 다음과 같이 하찮은(다른 컴포넌트에서 안쓰는) 데이터는 redux에 쓰지말고 useState 쓰자... */
let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === "열자" || 액션.type === "닫자") {
    let copy = state;
    return !copy;
  }
  return state;
}

let 재고 = [10, 11, 12];

function reducer3(state = 재고, 액션) {
  if (액션.type === "재고감소") {
    let copy = [...state];

    if (copy[액션.payload] > 0) {
      copy[액션.payload]--;
    } else {
      alert("재고가 없습니다");
    }
    return copy;
  }
  return state;
}

let store = createStore(combineReducers({ reducer, reducer2, reducer3 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
