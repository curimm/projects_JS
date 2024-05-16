const React = require('react');
import React, { Component } from "react";
import {HashRouter,Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage"
import DetailPage from "./pages/DetailPage/DetailPage";
import MVTITest from "./pages/MVTITest/MVTITest";
import MVTIResult from "./pages/MVTIResult/MVTIResult";

////router시 필요 패키지 호출
//const {createElement}=require('react');
//const {render}= require('react-dom');
//const{BrowserRouter:Router, Route, Switch} = require('react-router-dom');
////컴포넌트 호출
//const MainPage = require('./pages/MainPage/MainPage');
//const LoginPage = require('./pages/LoginPage/LoginPage');
//const DetailPage= require('./pages/DetailPage/DetailPage');
//const MVTITest = require('./pages/MVTITest/MVTITest');
//const MVTIResult = require("./pages/MVTIResult/MVTIResult");

//router 구성 설정
const routes = [
  {path: '/', Component:MainPage},
  {path: '/LoginPage', Component:LoginPage},
  {path: '/DetailPage', Component:DetailPage},
  {path: '/MVTITest', Component:MVTITest},
  {path: '/MVTIResult',component:MVTIResult},
];


//routing 로직 처리
function App() {
   return (
     <BrowserRouter>
       <Switch>
         {routes.map((route, index) => (
           <Route key={index} exact={true} path={route.path} component={route.Component} />
         ))}
         <Route component={NotFound} />
       </Switch>
     </BrowserRouter>
   );
 }

//앱 랜더링
//.getElementById('app'):id가 "app"인 DOM 요소의 App 컴포넌트를 렌더링
//HTML 파일의 <div id="app"></div>을 찾아 해당 부분에 React 애플리케이션이 렌더링
//render(createElement(App), document.getElementById('root'));
//ReactDOM.render(
//  React.createElement(App),
//  document.getElementById('App'),
//)
ReactDOM.render(
   <App />,
   document.getElementById('root')
);

export default App;