// 마이페이지(찜 리스트,시청리스트, MVTI추천리스트,재검사,마이페이지-MVTI_IMG리스트)
import React from "react";
import "./MyPage.css";


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
 
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}
 
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}
 
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}
 
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 1500); // 3초마다 자동 슬라이드                
});