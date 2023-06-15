// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import {isWindowWidth} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'
// import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
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
    el.addEventListener('click', function() {
      // console.log('有接!');
      addActive(tabItems, index);
      addActive(contentBox, index)
      // sliderTabReady(index);
    });
  });
  // 初始化輪播(剛load進來預設第一個頁籤active)
  // sliderTabReady();
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove('active');
  });
  arrayElementIn[elementIndex].classList.add('active');
}

// 滾動
function scrollTabSection() {
  var scrollItemSwan = document.getElementById( 'decorTabSectionSwan' );
  var scrollItemLeft = document.getElementById( 'decorTabSectionLeft' );
  var scrollItemRight = document.getElementById( 'decorTabSectionRight' );
  var scrollItemBall = document.getElementById( 'decorTabSectionBall' );

  window.addEventListener( "scroll", function () {
    var scrollPercentageItem = getScrollPercentage( scrollItemSwan, 0, .5 );

    var pos = 100 + scrollPercentageItem * -100;
    var value = scrollPercentageItem * 1;

    scrollItemSwan.style.transform = ' translateX(' + pos + '%) translateY(' + pos/5 + '%) scale(' + value + ')';
    scrollItemSwan.style.opacity = value;
    scrollItemLeft.style.transform = ' translateX(' + pos + '%) translateY(' + pos/5 + '%) scale(' + value + ')';
    scrollItemLeft.style.opacity = value;
    scrollItemRight.style.transform = ' translateX(-' + pos + '%) translateY(' + pos/5 + '%) scale(' + value + ')';
    scrollItemRight.style.opacity = value;
    scrollItemBall.style.transform = ' translateX(-' + pos + '%) translateY(' + pos/5 + '%) scale(' + value + ')';
    scrollItemBall.style.opacity = value;
    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollItem2.style.transform = 'translateY(' + pos + '%) scale('+ value + ')';
    // scrollItem2.style.transformOrigin = 'bottom';

    if ( scrollPercentageItem === 1 ) {
      scrollItemSwan.classList.add( 'active' );
      scrollItemLeft.classList.add( 'active' );
      scrollItemRight.classList.add( 'active' );
      scrollItemBall.classList.add( 'active' );
    } else {
      scrollItemSwan.classList.remove( 'active' );
      scrollItemLeft.classList.remove( 'active' );
      scrollItemRight.classList.remove( 'active' );
      scrollItemBall.classList.remove( 'active' );
    }
  });
}

function buildSliderContent(){
  if(!(dataTab1 && dataTab2 && dataTab3 && dataTab4 && dataTab5 && dataTab6)) return false;

  var dataArray = [dataTab1, dataTab2, dataTab3, dataTab4, dataTab5, dataTab6];
  var sliderContainerArray = Array.apply(null, document.querySelectorAll('#tabContentBlock .item__wrap'));

  sliderContainerArray.forEach(function(item, index){
    dataArray[index].forEach(function(el){
      var sliderChild = buildDynamicSliderLiElement(el);

      item.appendChild(sliderChild);
    });
  });
}


