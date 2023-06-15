// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import {isWindowWidth} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

// scroll
// import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initTabSection = [
  // buildContent(), 
  buildTabSliderContent(),
  scrollTabSection(),
];

function buildTabSliderContent () {
  var sliderContainer = document.querySelector( '#tabSliderBlock .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataTabSlider.forEach( function ( item, index ) {
    // var subData = thisArray[index];
    // console.log(subData);
    
    
    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicItemWrap = document.createElement('li');
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicItemWrap.classList.add('swiper-slide');
    dynamicItemWrap.classList.add('tab--' + (index+1) );

    // 第二層迴圈是要抓每個{}的值
    item.forEach( function ( el ){
      var sliderChild = buildDynamicAutoSync( el, {
        isSliderLazyLoad: false,
        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item--tab",
      } );
      // 把dynamic__item加在dynamicItemWrap裡
      dynamicItemWrap.appendChild(sliderChild);

    });
    // 完成的li加在swiper-wrapper裡
    sliderContainer.appendChild(dynamicItemWrap);  
  
  });


  var dynamicItemWrap = document.querySelectorAll('#tabSliderBlock .swiper-slide')
  // console.log(dynamicItemWrap);


  dynamicItemWrap.forEach(function(el, index, thisArray){

    if (thisArray[index].children.length < 6) {
      el.insertAdjacentHTML('beforeend', '<div class="dynamic__item--tab decor"><img src="decor-tab-bottom.png", alt=""></div>');
    };
  })


  tabSliderReady();
}

function tabSliderReady() {
  var tabSlider = new Swiper('#tabSliderBlock', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // initialSlide: dayDiff,
    grabCursor: true,
    loop: true,
    // allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: '5%',
    // slidesPerGroup: 2,
    // slidesPerColumn : 3,
    slidesPerColumnFill : 'row',
    speed: 600,
    pagination: {
      el: '.pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<img src="tab-' + (index+1) + '.png">' + "</span>";
      },
    },

    
  })
  return tabSlider
}




// 滾動物件
function scrollTabSection() {
  var scrollItem = document.getElementById( 'decorTabLeft1' );
  var scrollItem2 = document.getElementById( 'decorTabLeft2');
  var scrollItem3 = document.getElementById( 'decorTabRight');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .2 );
    var scrollPercentage2 = getScrollPercentage( scrollItem, 0, .6 );
    // var pos = 100 + scrollPercentage * -100;
    // var angle = -360 + scrollPercentage * 360;
    var value = scrollPercentage2 * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollTitle.style.transformOrigin = 'bottom';

    scrollItem2.style.transform = 'scale(' + value + ')';
    scrollItem2.style.filter = 'brightness(' + value + ')';
    scrollItem2.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem3.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem3.classList.remove( 'active' );
    }
  });
}
