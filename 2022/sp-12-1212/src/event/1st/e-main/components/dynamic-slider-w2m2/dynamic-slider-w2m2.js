import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW2M2 = [
  buildDynamicSliderW2M2Content(),
  scrollDynamicSliderW2M2(),
];

function buildDynamicSliderW2M2Content () {
  var sliderContainer = document.querySelector( '#DynamicSliderW2M2Block .swiper-wrapper' );
  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW2M2.forEach( function ( el, index ) {
    // var subData = thisArray[index];
    // console.log(subData);

    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicW2M2ItemWrap = document.createElement('li');
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicW2M2ItemWrap.classList.add('swiper-slide');

    // 第二層迴圈是要抓每個{}的值
    el.forEach( function ( item ){
      var sliderChild = buildDynamicAutoSync( item, {
        isSliderLazyLoad: false,
        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item",
      } );

      // 把dynamic__item加在dynamicW2M2ItemWrap裡
      dynamicW2M2ItemWrap.appendChild(sliderChild);

      // dynamicItemStyle.classList.add('item--before');
    });
    // 完成的li加在swiper-wrapper裡
    sliderContainer.appendChild(dynamicW2M2ItemWrap);    
    
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderW2M2Ready();
}


function dynamicSliderW2M2Ready() {
  var dynamicSliderW2M2Item = new Swiper('#DynamicSliderW2M2Block', {
    autoplay: {
      delay: 1800,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    direction: "vertical",
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#DynamicSliderW2M2Block .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
		slidesPerView: 1,
    // spaceBetween: '1%',
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderW2M2Item;
}

// 滾動
function scrollDynamicSliderW2M2() {
  var scrollItem = document.getElementById( 'decorDynamicW2M2Left' );
  var scrollItem2 = document.getElementById( 'decorDynamicW2M2Right' );
  var scrollTitle = document.getElementById( 'decorDynamicW2M2Title');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}