"use strict";

const api_key = "829a43a98259bc44cae297489c7e3bba";
const imageBaseURL = "https://image.tmdb.org/t/p/";

// 'url'을 사용하여 서버에서 데이터를 가져오고 'selectiveParam'이 있는 경우 선택적 매개변수와 함께 JSON 데이터의 결과를 '콜백' 함수에 전달합니다.

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
