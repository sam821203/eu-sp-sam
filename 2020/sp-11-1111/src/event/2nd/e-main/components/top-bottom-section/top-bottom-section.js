// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderTopBottom = detectApp(window.addEventListener('load', sliderTopBottomReady), sliderTopBottomReady);

function sliderTopBottomReady() {
  var sliderTopBottom = new Swiper('#sliderTopBottom', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 3,
    //   },
    // },
    // centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderTopBottom .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderTopBottomNext',
    //   prevEl: '#sliderTopBottomPrev',
    // },
    // on: {
    //   setTranslate: function () {
    //     var slides = this.slides;
    //     for (var i = 0; i < slides.length; i++) {
    //       var slide = slides.eq(i);
    //       var progress = slides[i].progress;

    //       // reset
    //       // slide.css({ 'opacity': '', 'background': '' }); 
    //       slide.transform('');

    //       // 無效果
    //       // slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')');

    //       // 縮放
    //       // slide.css('opacity', (1 - Math.abs(progress) / 6));
    //       // slide.transform('translate3d(0,' + Math.abs(progress) * 20 + 'px, 0)');

    //       // 旋轉
    //       slide.transform('rotate(' + progress * 30 + 'deg)');

    //       // 顏色
    //       // slide.css('background', 'rgba(' + (255 - Math.abs(progress) * 20) + ',' + (127 + progress * 32) + ',' + Math.abs(progress) * 64 + ')');

    //       //綜合應用
    //       // slide.transform('translate3d(0,' + Math.abs(progress) * 20 + '%, 0) rotate(' + progress * 30 + 'deg) scale(' + (1.1 - Math.abs(progress) / 2) + ')');
    //     }
    //   },
    //   setTransition: function (swiper, transition) {
    //     for (var i = 0; i < this.slides.length; i++) {
    //       var slide = this.slides.eq(i)
    //       slide.transition(transition);
    //     }
    //   },
    // },
    // pagination: {
    //   el: '#sliderTopBottomPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    // slidesPerGroup: 1,
    spaceBetween: '1.5%',
    speed: 600,
    // watchSlidesProgress: true,
    // watchSlidesVisibility : true, 
  })
}
