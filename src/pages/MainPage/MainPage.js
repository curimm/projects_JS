// 메인페이지(시청리스트,인기리스트, MVTI추천리스트)
import React from "react";

const MainPage = () => {
  return(
    <div>
            <h1>홈 페이지</h1>
      <p>이곳은 홈 페이지입니다.</p>
    </div>
  )
}
const MainPageSections = [
    {
      title: "Upcoming Movies",
      path: "/movie/upcoming",
    },
    {
      title: "This Week Trending Movies",
      path: "/trending/movie/week",
    },
    {
      title: "Top Rated Movies",
      path: "/movie/top_rated",
    },
  ];
  export default MainPage;