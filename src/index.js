import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "zarm";

import { Provider } from "react-redux";
import store from "./store/index";

import "./assets/css/reset.scss"; // 引入sass
import "zarm/dist/zarm.css";

import "amfe-flexible";

ReactDOM.render(
  <ConfigProvider primaryColor="#e54847">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
