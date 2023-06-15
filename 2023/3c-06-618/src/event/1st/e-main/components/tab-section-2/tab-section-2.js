// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { checkTimeForOverlay } from "utils/js/detect.js";
import { checkActiveWithTime } from "utils/js/detect.js";

export var initTabSection2 = [
  buildTab2(),
  checkTimeForOverlay('#tabSectionDate2', 'bg-tab2'),
  checkActiveWithTime('#tabSectionDate2', '.tab__item--top'),
];

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

// Tab 頁籤
function buildTab2() {
  var tabContentBlock2 = document.getElementById('tabContentBlock2');
  var contentBox = Array.apply(null, tabContentBlock2.querySelectorAll('.content__box'));
  var tabBox2 = document.getElementById('tabBox2');
  var tabItems = Array.apply(null, tabBox2.querySelectorAll('.tab__item--top'));

  // var dateNow = dateCheck() - 1; // change date to zero start
  if (tabItems.length !== contentBox.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  tabItems.forEach(function (el, index) {
    el.addEventListener('click', function () {
      addActive(tabItems, index);
      addActive(contentBox, index);
      tabReady2(index);
    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  tabReady2();
}

function tabReady2(index) {
  var index = index || 0;
  var arrayTabContents = Array.apply(null, document.querySelectorAll('.tab__slider'));

  var sliderTabContents = new Swiper(arrayTabContents[index], {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    // init: !isWindowWidth(960),
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
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    speed: 600,
    // breakpoints: {
    //   960: {
    //     slidesPerView: 3,
    //   }
    // },
  })
}