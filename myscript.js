'use strict'
const leftArr = document.querySelector('.offer__slider-prev');
const rightArr = document.querySelector('.offer__slider-next');
const currentNum = document.getElementById('current');
const totalNum = document.getElementById('total');
const slides = document.querySelectorAll('.offer__slide');

function showSlide (value) {
    hideSlides();
        currentNum.textContent = `0${value}`;
        slides[+currentNum.textContent -1].style.display = 'block';
};

function hideSlides () {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
};

hideSlides();

slides[+currentNum.textContent - 1].style.display = 'block';

leftArr.addEventListener('click', () => {
    if (+currentNum.textContent === 1) {
        showSlide(+totalNum.textContent)
    }
     else {showSlide(+currentNum.textContent - 1);}   
});

rightArr.addEventListener('click', () => {
    if (+currentNum.textContent === +totalNum.textContent) {
        showSlide(1);
    } else {showSlide(+currentNum.textContent + 1);}
});

