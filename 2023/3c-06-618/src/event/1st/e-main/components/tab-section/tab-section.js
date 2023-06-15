// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { laterDateHide, laterDateShow } from "utils/js/detect.js";
import { checkActiveWithTime, getDateFromElement, getElementsArray } from "utils/js/detect.js";

export var initTabSection = [
  buildTab(),
  buildTabSectionTime(),
  buildTabActiveTime(),
];

function buildTabSectionTime() {
  laterDateHide("2023/06/18 00:00:00", "#tabSectionDate1");
  laterDateShow("2023/06/18 00:00:00", "#tabSectionDate2");
}

function buildTabActiveTime() {
  checkSpecialForOverlay('#tabSectionDate1', 'bg-tab');
  checkActiveWithTime('#tabSectionDate1', '.tab__item--top');
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

function checkSpecialForOverlay(section, overlayImage) {
  var dateElements = getElementsArray(section, '[data-start]');

  dateElements.forEach(function (el, index) {
    var { now, start, end } = getDateFromElement(el);
    var overlay = el.firstElementChild;

    if (now >= start && now <= end) {
      overlay.style.backgroundImage = 'none';
      overlay.style.pointerEvents = 'none';
    } else if (now > end) {
      overlay.style.backgroundImage = 'url(' + overlayImage + '-times-up.png)';
    } else if (now < start && index !== dateElements.length - 1) {
      overlay.style.backgroundImage = 'url(' + overlayImage + '-coming.png)';
    } else if (index === dateElements.length - 1) {
      overlay.style.backgroundImage = 'url(' + overlayImage + '-coming-618.png)';
    }
  })
}

function buildTab(){
  var tabBox = document.getElementById('tabBox');
  var tabContentBlock = document.getElementById('tabContentBlock');
  var contentBox = Array.apply(null, tabContentBlock.querySelectorAll('.content__box'));
  var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item--top'));
  var tabContentBlock = document.getElementById('tabContentBlock');

  if (tabItems.length !== contentBox.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  tabItems.forEach(function (el, index) {
    el.addEventListener('click', function() {
      addActive(tabItems, index);
      addActive(contentBox, index);
      tabReady(index);
    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  tabReady();
}

function tabReady(index) {
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
    // initialSlide: tabItemTopArr.filter(el => el.classList.contains('active')),
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
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
    // breakpoints: {
    //   960: {
    //     slidesPerView: 3,
    //   }
    // },
  })
}