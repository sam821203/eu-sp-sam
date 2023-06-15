import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW2M22 = [
  buildDynamicSliderW2M22Content(),
  scrollDynamicSliderW2M22(),
  bannerSliderW2M22Ready(),
];

function buildDynamicSliderW2M22Content () {
  var sliderContainer = document.querySelector( '#dynamicSliderW2M22Block .swiper-wrapper' );
  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW2M22.forEach( function ( el, index ) {
    // var subData = thisArray[index];
    // console.log(subData);

    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicW2M22ItemWrap = document.createElement('li');
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicW2M22ItemWrap.classList.add('swiper-slide');

    // 第二層迴圈是要抓每個{}的值
    el.forEach( function ( item ){
      var sliderChild = buildDynamicAutoSync( item, {
        isSliderLazyLoad: false,
        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item",
      } );

      // 把dynamic__item加在dynamicW2M22ItemWrap裡
      dynamicW2M22ItemWrap.appendChild(sliderChild);

      // dynamicItemStyle.classList.add('item--before');
    });
    // 完成的li加在swiper-wrapper裡
    sliderContainer.appendChild(dynamicW2M22ItemWrap);    
    
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderW2M22Ready();
}


function dynamicSliderW2M22Ready() {
  var dynamicSliderW2M22Item = new Swiper('#dynamicSliderW2M22Block', {
    autoplay: {
      delay: 1800,
      // reverseDirection: true,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dynamicSliderW2M22Block .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    effect: "fade",
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
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderW2M22Item;
}

function bannerSliderW2M22Ready() {
  var promoSPItem = new Swiper('#bannerSliderReady', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#bannerSliderReady .swiper-slide').length),
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
		// slidesPerView: 1,
    // spaceBetween: '1%',
    // slidesPerGroup: 2,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSPItem;
}

// 滾動
function scrollDynamicSliderW2M22() {
  var scrollItem = document.getElementById( 'decorDynamicW2M22Left' );
  var scrollItem2 = document.getElementById( 'decorDynamicW2M22Right' );
  var scrollTitle = document.getElementById( 'decorDynamicW2M22Title');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem2, 0, .4 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;
    
    scrollItem.style.transform = 'translateY(' + pos + '%) translateX(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(' + pos + '%) translateX(-' + pos + '%) scale(' + value + ')';
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