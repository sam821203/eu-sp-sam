import { detectApp } from 'utils/js/detect.js'

export var initHeroSlider = detectApp(window.addEventListener('load', sliderReady), sliderReady);

function sliderReady() {
  var heroSlider = new Swiper('#heroSlider', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#heroSlider .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#heroSliderNext',
    //   prevEl: '#heroSliderPrev',
    // },
    slidesPerView: 1,
    speed: 600,
    pagination: {
      el: '#heroSliderPager',
      type: 'bullets',
      clickable: true,
    },
  });
}