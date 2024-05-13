//const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");
"use strict";
const React = require('react');
const GoogleLogin = require('react-google-login');
const KakaoLogin = require('react-Kakao-login');
const NaverLogin = require('react-Naver-login');

//google Login함수 생성
const responseGoogle = (response) => {
  console.log(response);
}
//Kakao Login함수 생성
const responseKakao = (response) => {
    console.log(response);
}
//Naver Login함수 생성
const responseNaver = (response) => {
    console.log(response);
}
//React.createElement 함수->Login 컴포넌트를 생성
//module.export ->다른 파일에서 사용할 수 있게 GoogleLoginButton 컴포넌트 보냄
//"YOUR 00_CLIENT_ID" : 소셜 개발자 콘솔에서 생성한 클라이언트 ID로 교체
const GoogleLoginButton = () => {
  return (
    React.createElement(GoogleLogin, {
      clientId: "YOUR_GOOGLE_CLIENT_ID",
      buttonText: "Google 계정으로 로그인",
      onSuccess: responseGoogle,
      onFailure: responseGoogle,
      cookiePolicy: 'single_host_origin'
    })
  );
}
const KakaoLoginButton = () => {
    return (
      React.createElement(KakaoLogin, {
        clientId: "YOUR_KAKAO_CLIENT_ID",
        buttonText: "Kakao 계정으로 로그인",
        onSuccess: responseKakao,
        onFailure: responseKakao,
        cookiePolicy: 'single_host_origin'
      })
    );
  }
  const NaverLoginButton = () => {
    return (
      React.createElement(NaverLogin, {
        clientId: "YOUR_NAVER_CLIENT_ID",
        buttonText: "Naver 계정으로 로그인",
        onSuccess: responseNaver,
        onFailure: responseNaver,
        cookiePolicy: 'single_host_origin'
      })
    );
  }
module.exports = GoogleLoginButton;
module.exports = KakaoLoginButton;
module.exports = NaverLoginButton;



//loginButton.addEventListener("click", (event) => {
//    event.preventDefault();
//    const username = loginForm.username.value;
//    const password = loginForm.password.value;
//
//    if (username === "user" && password === "web_dev") {
//        alert("You have successfully logged in.");
//        location.reload();
//    } else {
//        loginErrorMsg.style.opacity = 1;
//    }
//});