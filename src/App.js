import React from "react";
import axios from 'axios';
//import Movie from "./movie";

//App 컴포넌트가 react.componenet 클래스 상속빋음
class App extends React.Component {
  state = {
    isLoading : true,
    movies: [],
  };

  gitMovies = async() => {
    //axios.get실행하고, 반환한 결과를 movies에 저장함.
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
  }

  componentDidMount() {
/*    setTimeout(() => {  this.setState({isLoading:false, movies:[],로딩 된 영화 data});},6000);*/
    //axios로 API 호출
    //const movies= axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.gitMovies();
  }

  render(){
    const {isLoading}=this.state;
    return <div>{isLoading ? 'wait for loading' : 'welcome'}</div>;
  }
}
export default App;
