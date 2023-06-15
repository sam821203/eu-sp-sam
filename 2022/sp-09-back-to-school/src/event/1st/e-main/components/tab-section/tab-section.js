// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import {isWindowWidth} from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
// scroll
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initTabSection = [
  // buildContent(), 
  buildTab(),
  scrollTabSection(),
];

// Tab 頁籤
function buildTab(){
  var tabBox = document.getElementById('tabBox');
  var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item'));
  // console.log(tabItems);
  var tabContentBlock = document.getElementById('tabContentBlock');
  var contentBox = Array.apply(null, tabContentBlock.querySelectorAll('.content__box'));

  // var dateNow = dateCheck() - 1; // change date to zero start

  if (tabItems.length !== contentBox.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  buildSliderContent();

  tabItems.forEach(function (el, index) {
    // if (index === dateNow) {
      // addActive(tabItems, dateNow);
      // addActive(contentBox, index);
    // }
    // addActive(contentBox, index);
  
    el.addEventListener('click', function() {
      // console.log('有接!');
      addActive(tabItems, index);
      addActive(contentBox, index)
      sliderTabReady(index);

    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  sliderTabReady();
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

function sliderTabReady(index) {
  var index = index || 0;
  var arrayTabContents = Array.apply(null, document.querySelectorAll('.tab__slider'));
  var thisSlideItemsLength = document.querySelectorAll( '.swiper-slide' ).length;

  var sliderTabContents = new Swiper(arrayTabContents[index], {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    grabCursor: true,
    init: thisSlideItemsLength > 1 ? true : console.log('沒填輪播資料'),

    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamic2Next',
    //   prevEl: '#sliderDynamic2Prev',
    // },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // slidesPerGroup: 3,
    // centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: "3%",
    speed: 600,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  })

  return sliderTabContents;
}

function buildSliderContent(){
  if(!(dataTab1 && dataTab2 && dataTab3 && dataTab4 && dataTab5 && dataTab6)) return false;

  var dataArray = [dataTab1, dataTab2, dataTab3, dataTab4, dataTab5, dataTab6];
  var sliderContainerArray = Array.apply(null, document.querySelectorAll('#tabContentBlock .swiper-wrapper'));

  sliderContainerArray.forEach(function(item, index){
    dataArray[index].forEach(function(el){
      var sliderChild = buildDynamicAutoSync(el);

      item.appendChild(sliderChild);
    });
  });
}

// 滾動物件
function scrollTabSection() {
  var scrollItem = document.getElementById( 'decorTabTitle' );
  var scrollItem2 = document.getElementById( 'decorTabLeft');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );
    var scrollPercentage2 = getScrollPercentage( scrollItem2, 0, .8 );

    var pos = 100 + scrollPercentage * -100;
    var pos2 = 150 + scrollPercentage2 * -150;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollItem2.style.transform = 'translateY(' + pos2 + '%)';

    // var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}
