import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { countDownNumber } from 'utils/js/build-time.js'
import { setIntervalFix } from 'utils/js/build-time.js'

export var initDailySlider = [
  buildDailySliderContent(),
  ScrollDailySlider(),
  dailyChange(),

];

function buildDailySliderContent () {
  var sliderContainer = document.querySelector( '#dailySliderBlock .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDailySlider.forEach( function ( el, index ) {
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

      // var dynamicItemStyle = document.querySelector( '.dynamic__item' );

      // dynamicItemStyle.classList.add('item--before');
    });
    // 完成的li加在swiper-wrapper裡
    sliderContainer.appendChild(dynamicItemWrap);    
    
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dailySliderReady();
}



function dailySliderReady() {
  // console.log('dd');
  var startTime = dailyObject.oneDay[0];
  var nowTime = new Date();
  var dayDiff = parseInt(Math.abs(startTime - nowTime) / 1000 / 60 / 60 / 24);
  // console.log(nowTime);
  // console.log(dayDiff);
  // var dayNumber = function () {

  // };

  var dailySlider = new Swiper('#dailySliderBlock', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    initialSlide: dayDiff,
    allowTouchMove: false,
    speed: 600,
  })
  return dailySlider
}

// 滾動物件
function ScrollDailySlider() {
  var scrollItem = document.getElementById( 'decorDailySliderLeft' );
  var scrollItem2 = document.getElementById( 'decorDailySliderRight' );
  // var scrollTitle = document.getElementById( 'DailySliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem2.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}


// 倒數器

// var time = new Date('2021/12/23');


function dailyChange () {
  var dataCheck = dataDailySlider || false;
  if ( !dataCheck ) return false;

  // 每日換品的時間現在移出去外面統一設定
  var dailyChangeArray = dailyObject.oneDay;
  // console.log(dailyChangeArray);

  // setIntervalFix(function (){
  
    // console.log( countDownNumber(dailyChangeArray))
    
  // }, 1000);  
  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(dailyChangeArray, [], 100,['countDownNumberObject', addDailyTime, true]);
}


// 每秒填入
function addDailyTime(){ // 十位數和個位數分開的話不會因為數字1寬度不足產生跳動問題
  // console.log(countDownNumberObject);
  var dailyHourTens = document.getElementById('dailyHourTens');
  var dailyHourUnits = document.getElementById('dailyHourUnits');
  var dailyMinTens = document.getElementById('dailyMinTens');
  var dailyMinUnits = document.getElementById('dailyMinUnits');
  var dailySecTens = document.getElementById('dailySecTens');
  var dailySecUnits = document.getElementById('dailySecUnits');

  dailyHourTens.innerHTML = window.countDownNumberObject.hourTens;
  dailyHourUnits.innerHTML = window.countDownNumberObject.hourUnits;
  dailyMinTens.innerHTML = window.countDownNumberObject.minTens;
  dailyMinUnits.innerHTML = window.countDownNumberObject.minUnits;
  dailySecTens.innerHTML = window.countDownNumberObject.secTens;
  dailySecUnits.innerHTML = window.countDownNumberObject.secUnits;
}