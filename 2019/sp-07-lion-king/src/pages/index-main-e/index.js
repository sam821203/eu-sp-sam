import { detectWindowWidth } from 'utils/js/detect.js'
import { isIE9 } from 'utils/js/detect.js'
import spTimeLimit from 'utils/js/auto-change'

  var sliderRank = new Swiper('#sliderRank', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
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
    speed: 600,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
  })

  var sliderLimit = new Swiper('#sliderLimit', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    effect: 'flip',
    flipEffect: {
      rotate: 30,
      slideShadows: false,
    },
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderLimit .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderLimitNext',
      prevEl: '#sliderLimitPrev',
    },
    slidesPerView: 1,
    speed: 600,
  })

  var sliderPromo = new Swiper('#sliderPromo', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderPromo .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderPromoNext',
      prevEl: '#sliderPromoPrev',
    },
    slidesPerView:3,
    slidesOffsetBefore: -150,
    offsetPxBefore: -150, // ie9 "slidesOffsetBefore"
    speed: 600,
    breakpoints: {
      959: {
        slidesPerView: 2,
        slidesOffsetBefore: 0,
      },
    },
  })

  var sliderEvent = new Swiper('#sliderEvent', {
    init: false,
    allowTouchMove: false,
    calculateHeight: true, // ie9 prevent float wrong height
    slidesPerView: 2,
    breakpoints: {
      959: {
        allowTouchMove: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '#sliderEventNext',
          prevEl: '#sliderEventPrev',
        },
        slidesPerView: 1,
        spaceBetween: -35,
        speed: 600,
      },
    },
  })

  var sliderBn = new Swiper('#sliderBn', {
    init: false,
    allowTouchMove: false,
    slidesPerView: 2,
    breakpoints: {
      959: {
        allowTouchMove: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '#sliderBnNext',
          prevEl: '#sliderBnPrev',
        },
        slidesPerView: 1,
        spaceBetween: -35,
        speed: 600,
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
  sliderEvent.init();
  sliderEvent.autoplay.start();
  sliderBn.init();
  sliderBn.autoplay.start();
  swiperClickBugFix();
}

detectWindowWidth(960, bnSliderStart(), null);

spTimeLimit("2019/7/8");
