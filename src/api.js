"use strict";

const api_key = "829a43a98259bc44cae297489c7e3bba";
const imageBaseURL = "https://image.tmdb.org/t/p/";

//데이터 호출 시 'selectiveParam'존재하면 선택적 매개변수와 JSON 데이터 결과 콜백함수에 전달

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
