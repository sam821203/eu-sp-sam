import { detectWindowWidth } from 'utils/js/detect.js'
import { isIE9 } from 'utils/js/detect.js'

// var sliderPoint = new Swiper('#sliderPoint', {
//   autoplay: isIE9() ? 2000 : {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   calculateHeight: true, // ie9 prevent float wrong height
//   grabCursor: true,
//   initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderPoint .swiper-slide').length),
//   loop: true,
//   navigation: {
//     nextEl: '#sliderPointNext',
//     prevEl: '#sliderPointPrev',
//   },
//   slidesPerView: 2,
//   speed: 600,
//   breakpoints: {
//     959: {
//       slidesPerView: 1,
//     },
//   },
// })

var sliderBank = new Swiper('#sliderBank', {
  autoplay: isIE9() ? 2000 : {
    delay: 2000,
    disableOnInteraction: false,
  },
  calculateHeight: true, // ie9 prevent float wrong height
  effect: 'flow',
  grabCursor: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  slideVisibleClass: 'swiper-slide-visible',
  // spaceBetween: -9,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  speed: 600,
  breakpoints: {
    959: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
})

var sliderEvent = new Swiper('#sliderEvent', {
  autoplay: isIE9() ? 2000 : {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '#sliderEventNext',
    prevEl: '#sliderEventPrev',
  },
  spaceBetween: -35,
  speed: 600,
  calculateHeight: true, // ie9 prevent float wrong height
  slidesPerView: 2,
  slidesPerGroup: 2,
  breakpoints: {
    959: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
})

var sliderRank = new Swiper('#sliderRank', {
  autoplay: isIE9() ? 2000 : {
    _delay: 2000,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    disableOnInteraction: false,
  },
  calculateHeight: true, // ie9 prevent float wrong height
  centeredSlides: true,
  grabCursor: true,
  initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderRank .swiper-slide').length),
  loop: true,
  navigation: {
    nextEl: '#sliderRankNext',
    prevEl: '#sliderRankPrev',
  },
  slidesPerView: 3,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  speed: 600,
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
  },
})

function swiperClickBugFix(){
  var sliderItems = document.querySelectorAll('.swiper-slide');
  sliderItems.forEach(function(el){
    var sliderLink = el.querySelector('a');
    if (sliderLink.href) {
      el.addEventListener('click', function(){
        location.href = sliderLink.href;
      });
    }
  });
}

function bnSliderStart() {
  swiperClickBugFix();
}

detectWindowWidth(960, bnSliderStart(), null);
