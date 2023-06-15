// depend plugin
// ==========================================================================
import 'slick-carousel';

// page functions
// ==========================================================================
var gallerySliders = $('#gallerySliders');
var todaySliderIndex = 0;

// 輪播隨時間更換
function dateSwitchSlider() {
    var dateArray = [12, 13, 14, 15, 16];
    var today = new Date().getDate();
    var mathRandom = Math.floor(Math.random() * dateArray.length);

    todaySliderIndex = mathRandom;

    dateArray.forEach(function (el, index) {
        if (el === today) {
            // 開始後跳轉
            // gallerySliders.slick('slickGoTo', index);

            // 一load進來直接換
            todaySliderIndex = index;
        }
    });
}
dateSwitchSlider();

// 輪播點擊下一張function
function clckToNext() {
    gallerySliders.slick('slickNext');
}

// 輪播init
$('#gallerySliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: todaySliderIndex,
    fade: true,
    prevArrow: '#slickBtnPrev',
    nextArrow: '#slickBtnNext',
    asNavFor: '#galleryVideos',
});
$('#galleryVideos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: todaySliderIndex,
    cssEase: 'ease-in',
    fade: true,
    arrows: false,
    asNavFor: '#gallerySliders',
});

// 輪播當格新增左右兩個假圖，分別為前後兩張
var sliderImg = document.querySelectorAll('#gallerySliders .thumb__box img');
var arrayImgSrc = Array.apply(null, sliderImg).map(function (el, i) {
    return el.src;
});
for (var i = 0; i < arrayImgSrc.length; i++) {
    var prevImg = document.createElement('img');
    var nextImg = document.createElement('img');

    prevImg.alt = "介紹卡片";
    prevImg.classList.add("card--others");
    nextImg.alt = "介紹卡片";
    nextImg.classList.add("card--others");

    if (i == 0) prevImg.src = arrayImgSrc[arrayImgSrc.length - 1];
    else prevImg.src = arrayImgSrc[i - 1];

    sliderImg[i].parentElement.insertBefore(prevImg, sliderImg[i]);

    if (i == arrayImgSrc.length - 1) nextImg.src = arrayImgSrc[0];
    else nextImg.src = arrayImgSrc[i + 1];

    sliderImg[i].parentElement.appendChild(nextImg);
}

// 輪播掛上當格點一下可以下一張
for (var i = 0; i < arrayImgSrc.length; i++) {
    sliderImg[i].addEventListener('click', clckToNext);
}