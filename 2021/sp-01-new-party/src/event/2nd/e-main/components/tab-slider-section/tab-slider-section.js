// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {isNeedSlider} from 'utils/js/detect.js'
// import {isWindowWidth} from 'utils/js/detect.js'

export var initBuildTab = buildTabSlider();

function buildTabSlider() {
  var tabSliderBox = document.getElementById('tabSliderBox');
  var tabItems = Array.apply(null, tabSliderBox.querySelectorAll('.tab__item'));
  var tabSliderContentBlock = document.getElementById('tabSliderContentBlock');
  var contentBox = Array.apply(null, tabSliderContentBlock.querySelectorAll('.content__box'));
  // var dateNow = dateCheck() - 1; // change date to zero start
  var dateNow = 0; // change date to zero start
  if (tabItems.length !== contentBox.length) {
      console.error('Tab Item數量與Content Box數量不符');
      return false;
  }

  tabItems.forEach(function (el, index) {
    if (index === dateNow) {
      // addActive(tabItems, dateNow);
      addActive(contentBox, index);
    }

    function clickActive() {
      addActive(tabItems, index);
      addActive(contentBox, index);
      // console.log(index);
      if (index == '1') {
          sliderTabClick_2();
      }
      else if (index == '2') {
          sliderTabClick_3();
      }
      else if (index == '0') {
          sliderTabReady();
      }
    }

    if (el.addEventListener) {
      el.addEventListener('click', clickActive, false);
    }
    else if (el.attachEvent) {
      el.addEventListener('onclick', clickActive);
    }
  });

}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

function dateCheck() {
  var date = new Date().getDate();
  return date;
}

import {detectApp} from 'utils/js/detect.js'
export var initSliderTabLoad = detectApp(window.addEventListener('load', sliderTabReady), sliderTabReady);
// export var initSliderTabClick= detectApp(window.addEventListener('click', sliderTabReady), sliderTabReady);

function sliderTabReady() {
  var sliderTab = new Swiper('#sliderTab', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    init: isNeedSlider('#sliderTab', 3),
    loop: true,
    calculateHeight: true, // ie9 prevent float wrong height
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 0,
    // init: isNeedSlider('#tabSliderContentBlock'),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    // loop: true,
    pagination: {
      el: '#sliderTabPager',
      clickable: true,
    },
    navigation: {
      nextEl: '#sliderTabPagerNext',
      prevEl: '#sliderTabPagerPrev',
    },
    // pagination: isIE9() ? '#sliderTabPager' : {
    //     el: '#sliderSpecialPager',
    //     type: 'bullets',
    //     clickable: true,
    // },
    // speed: 600,

  })
}
function sliderTabClick_2() {
  var sliderTab_2 = new Swiper('#sliderTab_2', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    init: isNeedSlider('#sliderTab_2', 3),
    loop: true,
    calculateHeight: true, // ie9 prevent float wrong height
    grabCursor: true,
    slidesPerView: 3,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 3,
    //   }
    // },
    spaceBetween: 0,
    pagination: {
      el: '#sliderTabPager_2',
      clickable: true,
    },
    navigation: {
      nextEl: '#sliderTabPagerNext_2',
      prevEl: '#sliderTabPagerPrev_2',
    },
  })
}
function sliderTabClick_3() {
  var sliderTab_3 = new Swiper('#sliderTab_3', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    init: isNeedSlider('#sliderTab_3', 3),
    loop: true,
    calculateHeight: true, // ie9 prevent float wrong height
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: '0.5%',
    // pagination: {
    //   el: '#sliderTabPager_3',
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: '#sliderTabPagerNext_3',
    //   prevEl: '#sliderTabPagerPrev_3',
    // },
  })
} 