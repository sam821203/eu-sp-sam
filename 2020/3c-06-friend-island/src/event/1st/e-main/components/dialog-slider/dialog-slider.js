import { detectApp } from 'utils/js/detect.js'

export var initSliderRight = [
  detectApp(window.addEventListener('load', sliderRightReady), sliderRightReady),
  detectApp(window.addEventListener('load', sliderLeftReady), sliderLeftReady)
];

function sliderRightReady() {
  var sliderRight = new Swiper('#sliderRight', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 1000,
  })
}

function sliderLeftReady() {
  setTimeout(function () {
    var sliderLeft = new Swiper('#sliderLeft', {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "fade",
      loop: true,
      speed: 1000,
    })
  }, 1000);
}