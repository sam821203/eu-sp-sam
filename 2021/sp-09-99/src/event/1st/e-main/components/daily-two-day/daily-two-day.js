// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initTwoDaySlider = twoDaySlider();

function twoDaySlider () {
  var dataCheck = dataDailyTwoDay || false;
  if ( !dataCheck ) return false;

  // 每日換品的時間現在移出去外面統一設定
  var twoDaySliderArray = dailyObject.twoDays;

  // 注意因為要取得twoDaySliderArray所以必須放在主function裡面，放在全域的話要自己在function內設定時間陣列
  function buildTwoDayDateText ( i ) {
    var i = i || 0;
    var el = document.getElementById( 'twoDayDate' );
    var day1Time = twoDaySliderArray[i].getTime();
    var day1NowRound = twoDaySliderArray[i];
    var day2NowRound = new Date(day1Time + 60*60*24*1000);
    var day1Month = day1NowRound.getMonth() + 1;
    var day2Month = day2NowRound.getMonth() + 1;
    var day1Date = ( day1NowRound.getDate() < 10 ) ? ( '0' + day1NowRound.getDate() ) : day1NowRound.getDate();
    var day2Date = ( day2NowRound.getDate() < 10 ) ? ( '0' + day2NowRound.getDate() ) : day2NowRound.getDate();
    var timeText = day1Month + '/' + day1Date + '-' + day2Month + '/' + day2Date;
    // console.log( timeText );

    el.innerHTML = timeText;
  }

  // setTimeout、setInterval的作用域在window
  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime( twoDaySliderArray, [buildSlider, buildTwoDayDateText], 100 );
}

// 建立當天的dynamic product的slider
function buildSlider(i){
  var sliderContainer = document.getElementById('sliderTwoDay');
  var sliderEl = sliderContainer.querySelector( '.swiper-wrapper' );
  var sliderNotification = sliderContainer.querySelector( '.swiper-notification' );

  // 歸零：每天i循環都先清空sliderEl、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  if(sliderNotification) sliderContainer.removeChild( sliderNotification );
  while ( sliderEl.firstChild ) {
    sliderEl.removeChild( sliderEl.firstChild );
  }

  dataDailyTwoDay[i].forEach( function ( el, index ) {
    var sliderChild = buildDynamicAutoSync( el );

    sliderEl.appendChild( sliderChild );
  } );

  // 啟動slider
  sliderTwoDayReady();
}

// 建立輪播
function sliderTwoDayReady() {
  var sliderTwoDay = new Swiper( '#sliderTwoDay', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    // loop: true, // 不要開loop否則要update輪播不然dup會錯
    // navigation: {
    //   nextEl: '#sliderTwoDayNext',
    //   prevEl: '#sliderTwoDayPrev',
    // },
    slidesPerView: 2,
    spaceBetween: '3%',
    speed: 600,
  } )

  return sliderTwoDay;
}

