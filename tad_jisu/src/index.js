import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./router/route.jsx";
import { BrowserRouter } from "react-router-dom";

import reducer from "reducer/index.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

const preloadedState = {};
const enhancer = applyMiddleware;
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Route />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
