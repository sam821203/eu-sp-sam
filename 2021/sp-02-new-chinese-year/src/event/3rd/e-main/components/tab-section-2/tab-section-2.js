// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

// import {detectApp} from 'utils/js/detect.js'
import {isWindowWidth} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initBuildTab_2 = buildTab_2();

function buildTab_2(){
  var tabBox_2 = document.getElementById('tabBox_2');
  var tabItems_2 = Array.apply(null, tabBox_2.querySelectorAll('.tab__item'));
  var tabContentBlock_2 = document.getElementById('tabContentBlock_2');
  var contentBox_2 = Array.apply(null, tabContentBlock_2.querySelectorAll('.content__box'));

  // var dateNow = dateCheck() - 1; // change date to zero start

  if (tabItems_2.length !== contentBox_2.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  buildSliderContent_2();

  tabItems_2.forEach(function (el, index) {
    // if (index === dateNow) {
      // addActive(tabItems_2, dateNow);
      // addActive(contentBox_2, index);
    // }
    // addActive(contentBox_2, index);
  
    el.addEventListener('click', function() {
      addActive(tabItems_2, index);
      addActive(contentBox_2, index)
      sliderTabReady_2(index);

    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  sliderTabReady_2();
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

// function dateCheck(){
//   var date = new Date().getDate();
//   return date;
// }

function sliderTabReady_2(index) {
  var index = index || 0;
  var arrayTabContents_2 = Array.apply(null, document.querySelectorAll('.tab__slider_2'));
  var sliderTabContents_2 = new Swiper(arrayTabContents_2[index], {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: !isWindowWidth(960),
    // navigation: isWindowWidth(960) ? {
    //   nextEl: '#sliderTabNext',
    //   prevEl: '#sliderTabPrev',
    // } : false,
    // pagination: {
    //   el: '#sliderTabPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
}

function buildSliderContent_2(){
  if(!(dataTab_wrap2_1 && dataTab_wrap2_2 && dataTab_wrap2_3 && dataTab_wrap2_4)) return false;

  var dataArray = [dataTab_wrap2_1, dataTab_wrap2_2, dataTab_wrap2_3, dataTab_wrap2_4];
  var sliderContainerArray = Array.apply(null, document.querySelectorAll('#tabContentBlock_2 .swiper-wrapper'));

  sliderContainerArray.forEach(function(item, index){
    dataArray[index].forEach(function(el){
      var sliderChild = buildDynamicSliderLiElement(el);

      item.appendChild(sliderChild);
    });
  });
}