// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { moveActiveToItem } from 'utils/js/move-active.js';

// export var initBuildTab = buildTabSlider();

// function buildTabSlider() {
//   var tabSliderBox = document.getElementById('tabSliderBox');
//   var tabItems = Array.apply(null, tabSliderBox.querySelectorAll('.tab__item'));
//   var tabSliderContentBlock = document.getElementById('tabSliderContentBlock');
//   var contentBox = Array.apply(null, tabSliderContentBlock.querySelectorAll('.content__box'));
//   if (tabItems.length !== contentBox.length) {
//       console.error('Tab Item數量與Content Box數量不符');
//       return false;
//   }

//   tabItems.forEach(function (el, index) {
//     function clickActive() {
//       moveActiveToItem(tabItems, index);
//       moveActiveToItem(contentBox, index);
//       // console.log(index);
//       if (index == '1') {
//           sliderTabClick_2();
//       }
//       else if (index == '2') {
//           sliderTabClick_3();
//       }
//       else if (index == '0') {
//           sliderTabReady();
//       }
//     }

//     if (el.addEventListener) {
//       el.addEventListener('click', clickActive, false);
//     }
//     else if (el.attachEvent) {
//       el.addEventListener('onclick', clickActive);
//     }
//   });

// }

// import {detectApp} from 'utils/js/detect.js'
// export var initSliderTabLoad = detectApp(window.addEventListener('load', sliderTabReady), sliderTabReady);
// // export var initSliderTabClick= detectApp(window.addEventListener('click', sliderTabReady), sliderTabReady);

// function sliderTabReady() {
//   var sliderTab = new Swiper('#sliderTab', {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     grabCursor: true,
//     slidesPerView: 3,
//     spaceBetween: '1%',
//     // init: isNeedSlider('#tabSliderContentBlock'),
//     // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
//     // loop: true,
//     pagination: {
//       el: '#sliderTabPager',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '#sliderTabPagerNext',
//       prevEl: '#sliderTabPagerPrev',
//     },
//     // pagination: isIE9() ? '#sliderTabPager' : {
//     //     el: '#sliderSpecialPager',
//     //     type: 'bullets',
//     //     clickable: true,
//     // },
//     // speed: 600,

//   })
// }
// function sliderTabClick_2() {
//   var sliderTab_2 = new Swiper('#sliderTab_2', {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     grabCursor: true,
//     slidesPerView: 3,
//     // breakpoints: {
//     //   768: {
//     //     slidesPerView: 3,
//     //   }
//     // },
//     spaceBetween: '1%',
//     // pagination: {
//     //   el: '#sliderTabPager_2',
//     //   clickable: true,
//     // },
//     // navigation: {
//     //   nextEl: '#sliderTabPagerNext_2',
//     //   prevEl: '#sliderTabPagerPrev_2',
//     // },
//   })
// }
// function sliderTabClick_3() {
//   var sliderTab_3 = new Swiper('#sliderTab_3', {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     grabCursor: true,
//     slidesPerView: 3,
//     spaceBetween: '1%',
//     // pagination: {
//     //   el: '#sliderTabPager_3',
//     //   clickable: true,
//     // },
//     // navigation: {
//     //   nextEl: '#sliderTabPagerNext_3',
//     //   prevEl: '#sliderTabPagerPrev_3',
//     // },
//   })
// }


export var initBuildTab = buildTabSlider();

function buildTabSlider(){
  var tabBox = document.getElementById('tabSliderBox');
  var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item'));
  var tabContentBlock = document.getElementById('tabSliderContentBlock');
  var contentBoxes = Array.apply(null, tabContentBlock.querySelectorAll('.content__box'));

  if ( tabItems.length !== contentBoxes.length ) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  tabItems.forEach(function (el, index) {

    el.addEventListener('click', function() {
      initTabSlider( tabItems, contentBoxes, index );
    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  initTabSlider( tabItems, contentBoxes, 0 );

  var nowSliderIndex = 0;

  setInterval( function () {
    var slider = sliderTabReady( nowSliderIndex );

    if ( slider.isEnd ) {
      nowSliderIndex++;

      if ( nowSliderIndex >= contentBoxes.length ) nowSliderIndex = 0;

      initTabSlider( tabItems, contentBoxes, nowSliderIndex );
    }

  }, 2600 );

}

function sliderTabReady(index) {
  var index = index || 0;
  var tabContentBlock = document.getElementById('tabSliderContentBlock');
  var arrayTabContents = Array.apply(null, tabContentBlock.querySelectorAll('.slider__tab'));
  var sliderTabContents = new Swiper(arrayTabContents[index], {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // navigation: isWindowWidth(960) ? {
    //   nextEl: '#sliderTabNext',
    //   prevEl: '#sliderTabPrev',
    // } : false,
    // pagination: {
    //   el: '#sliderTabPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: '3%',
    speed: 600,
  } )

  return sliderTabContents;
}

function initTabSlider ( tabItems, contentBoxes, index ) {
  moveActiveToItem( tabItems, index );
  moveActiveToItem( contentBoxes, index );
  sliderTabReady( index );
}