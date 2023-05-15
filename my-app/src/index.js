import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import RouterComponent from "./09_RouterComponent";
import { BrowserRouter } from "react-router-dom";
import ReactRef from "./10_Ref";
import { FetchGet, FetchPost } from "./11_Fetch";
import { AxiosGet, AxiosPost } from "./12_Axios";
import { Callback, PromiseThen, PromiseCatch } from "./13_Callback";

import reportWebVitals from "./reportWebVitals";

// 루트 노드
// React로 구현한 애플리케이션은 일반적으로 하나의 루트 DOM이 존재하며,
// 기존 앱에 react를 점진적으로 추가하였다면 원하는 만큼 많은 수의 독립적인 Root dom노드가 존재할 수 없다.

/*
  리액트 구동을 위해서는 dom엘리먼트를 ReactDom.createRoot()안에 넣어두고
  react엘리먼트를 root.render()함수 안에 넣어주면 된다.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*
    페이지 로딩 후 root.render()함수 내부에 호출하고자 하는 리액트 컴포넌트를 추가하면 해당 컴포넌트가 호출됨
    App이라는 컴포넌트를 사용하기 위해서는 상단에 import문으로 App이 추가되어있어야함

    리액트에서 컴포넌트가 대문자로 시작하는 이유는 리액트에서 소문자는 html dom요소(div, p, h2 ...)로 해석을 하고
    대문자로 시작하면 컴포넌트 요소로 해석하기 때문.
  */
  // <App />
  // <App2 />
  // <App3 />
  // <App4 />
  <BrowserRouter>
    <RouterComponent/>
    <ReactRef/>
    {/* <FetchGet/>
    <FetchPost/>
    <AxiosGet/>
    <AxiosPost/> */}
    <Callback/>
    <PromiseThen/>
    <PromiseCatch/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
