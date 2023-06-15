import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSlider = [
  buildDynamicSliderContent(),
  scrollDynamicSlider(),
];

function buildDynamicSliderContent () {
  var sliderContainer = document.querySelector( '#DynamicSliderBlock .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSlider.forEach( function ( el, index ) {
    // var subData = thisArray[index];
    // console.log(subData);

    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicItemWrap = document.createElement('li');
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicItemWrap.classList.add('swiper-slide');

    // 第二層迴圈是要抓每個{}的值
    el.forEach( function ( item ){
      var sliderChild = buildDynamicAutoSync( item, {
        isSliderLazyLoad: false,
        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item",
      } );

      // 把dynamic__item加在dynamicItemWrap裡
      dynamicItemWrap.appendChild(sliderChild);

      // dynamicItemStyle.classList.add('item--before');
    });
    // 完成的li加在swiper-wrapper裡
    sliderContainer.appendChild(dynamicItemWrap);    
    
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderReady();
}


function dynamicSliderReady() {
  var dynamicSliderItem = new Swiper('#DynamicSliderBlock', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    // effect: "fade",
    // flipEffect: {
    //   slideShadows: false,
    // },
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#DynamicSliderBlock .swiper-slide').length),
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
    spaceBetween: '1%',
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderItem;
}

// 滾動
function scrollDynamicSlider() {
  var scrollItem = document.getElementById( 'decorDynamicLeft' );
  var scrollTitle = document.getElementById( 'decorDynamicTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;

    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollTitle.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollTitle.classList.remove( 'active' );
    }
  });
}