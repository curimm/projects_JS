const React = require('react');
import React, { Component } from "react";
import axios from 'axios';
import { func } from "prop-types";

//router시 필요 패키지 호출
const {createElement}=require('react');
const {render}= require('react-dom');
const{BrowserRouter:Router, Route, Switch} = require('react-router-dom');
//컴포넌트 호출
const MainPage = require('./pages/MainPage/MainPage');
const LoginPage = require('./pages/LoginPage/LoginPage');
const DetailPage= require('./pages/DetailPage/DetailPage');
const MVTITest = require('./pages/MVTITest/MVTITest');

//router 구성 설정
const routes = [
  {path: '/', Component:MainPage},
  {path: '/LoginPage', Component:LoginPage},
  {path: '/DetailPage', Component:DetailPage},
  {path: '/MVTITest', Component:MVTITest},
];
//routing 로직 처리
function App() {
  return(
    createElement(BrowserRouter,null,
      createElement(Switch,null,
        routes,map((route,index) => 
          createElement(Route, { key: index, exact: true, path: route.path, component: route.component })
      ),
      createElement(Route, { component: NotFound })
    )
  )
);
}

//앱 랜더링
//.getElementById('app'):id가 "app"인 DOM 요소의 App 컴포넌트를 렌더링
//HTML 파일의 <div id="app"></div>을 찾아 해당 부분에 React 애플리케이션이 렌더링
render(createElement(App), document.getElementById('root'));
ReactDOM.render(
  React.createElement(App),
  document.getElementById('App'),
)

////App 컴포넌트가 react.componenet 클래스 상속빋음
//class App extends React.Component {
//  state = {
//    isLoading : true,
//    movies: [],
//  };


//  gitMovies = async() => {
//    //axios.get실행하고, 반환한 결과를 movies에 저장함.
//    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//    console.log(movies);
//  }
//
//  componentDidMount() {
///*    setTimeout(() => {  this.setState({isLoading:false, movies:[],로딩 된 영화 data});},6000);*/
//    //axios로 API 호출
//    //const movies= axios.get('https://yts-proxy.now.sh/list_movies.json');
//    this.gitMovies();
//  }
//
//  render(){
//    const {isLoading}=this.state;
//    return <div>{isLoading ? '열심히 로딩 중! 잠시만 기다려주세요' : 'Wait for Loading!'}</div>;
//  }
//}
//export default App;
