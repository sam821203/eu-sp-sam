import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDailySlider = [
  dailySlider(),
  ScrollDailySlider(),
];

function dailySlider () {
  var dataCheck = dataDailySlider || false;
  if ( !dataCheck ) return false;

  // 每日換品的時間現在移出去外面統一設定
  var dailySliderArray = dailyObject.oneDay;

  // setTimeout、setInterval的作用域在window
  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime( dailySliderArray, [buildSlider, buildNextItem], 100 );
}

// 輪播進迴圈會沒法控制，使用slider.update()更新
var slider = sliderDailyReady();

// 建立當天的dynamic product的slider
function buildSlider(i){
  var dataLength = dataDailySlider.length;
  var isLastDate = ( dataLength - i == 1 ) ? true : false; // 最後一天

  var sliderContainer = document.getElementById('sliderDaily');
  var sliderEl = sliderContainer.querySelector( '.swiper-wrapper' );
  var sliderNotification = sliderContainer.querySelector( '.swiper-notification' );

  // 歸零：每天i循環都先清空sliderEl、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  if(sliderNotification) sliderContainer.removeChild( sliderNotification );
  while ( sliderEl.firstChild ) {
    sliderEl.removeChild( sliderEl.firstChild );
  }

  // 最後一天
  if ( isLastDate ) {
    var sliderChild = buildDynamicAutoSync( dataDailySlider[i][0], {
      outerTag: 'div',
      isSlider: false,
    });

    buildProductPart( sliderChild, i, 0 );
    sliderEl.appendChild( sliderChild );
    slider.update();
    slider.autoplay.stop();

    // 最後一天沒有slider，所以關掉箭頭
    // var sliderDailyPrev = document.getElementById( 'sliderDailyPrev' );
    // var sliderDailyNext = document.getElementById( 'sliderDailyNext' );

    // sliderDailyPrev.style.display = 'none';
    // sliderDailyNext.style.display = 'none';

  } else {
    dataDailySlider[i].forEach( function ( el, index ) {
      var sliderChild = buildDynamicAutoSync( el, {
        isSliderLazyLoad: false,
      } );

      buildProductPart( sliderChild, i, index );
      sliderEl.appendChild( sliderChild );
    } );
    slider.update();
  }
}

// 建立後兩天的dynamic product
function buildNextItem(i){
  if ( !dataDailySlider ) return false;

  var dataLength = dataDailySlider.length;
  var isLastDate = ( dataLength - i == 1 ) ? true : false; // 最後一天
  var isLastDate2 = ( dataLength - i == 2 ) ? true : false; // 倒數兩天
  var ArrayDailyNext = Array.apply( null, document.querySelectorAll( '.daily--next' ) );

  // 歸零：每天i循環都先清空.daily--next
  // (其內會以一個outTag包dynamic product，若非只有一個tag要用while一直跑移除el.firstChild)
  ArrayDailyNext.forEach( function ( el ) {
    if ( el.firstChild ) el.removeChild( el.firstChild );
  });

  // 當不是最後一天也不是倒數兩天時，正常處理
  if ( !isLastDate && !isLastDate2 ) {
    ArrayDailyNext.forEach( function ( el, index ) {
      // 第 i + index + 1天(第一天就是 0 + 0 + 1 = 1與0 + 1 + 1 = 2的第0項)
      // 也就是第一天i = 0時，取第二天i = 1與第三天i = 2的的0項(第一品)
      var itemNext = buildDynamicAutoSync( dataDailySlider[i + index + 1][0], {
        outerTag: 'div',
        isSlider: false,
      } );

      // 日期會是會是index + 1，第一天會取date + 1與date + 2
      buildProductPart( itemNext, i, index, true );
      el.appendChild( itemNext );
    });

    // 把兩個next的a href清掉
    var anchorDailyNext = Array.apply( null, document.querySelectorAll( '.daily--next a' ) );

    anchorDailyNext.forEach( function ( el ) {
      el.href = 'javascript:void(0)';
    });

  // 當倒數兩天時，露出最後一天的前兩品
  } else if ( isLastDate2 ) {
    ArrayDailyNext.forEach( function ( el, index ) {

      // 直接取i + 1的最後一天
      var itemNext = buildDynamicAutoSync( dataDailySlider[i + 1][index], {
        outerTag: 'div',
        isSlider: false,
      } );

      // 日期會直接取0，+1就是加一天
      buildProductPart( itemNext, i, 0, true );
      el.appendChild( itemNext );
    });

    // 把兩個next的a href清掉
    var anchorDailyNext = Array.apply( null, document.querySelectorAll( '.daily--next a' ) );

    anchorDailyNext.forEach( function ( el ) {
      el.href = 'javascript:void(0)';
    });

  // 當最後一天時，露出第二三品
  } else if ( isLastDate ) {
    ArrayDailyNext.forEach( function ( el, index ) {
      // 直接取i當天的index+1品(二三品)
      var itemNext = buildDynamicAutoSync( dataDailySlider[i][index + 1], {
        outerTag: 'div',
        isSlider: false,
      } );
      // 日期會直接取i就是當天，並把index、notyet參數拿掉(因為都要active)
      buildProductPart( itemNext, i);
      el.appendChild( itemNext );
      el.classList.add('active');
    });
  }
}

// 建立dynamic新增的部分，日期與logo
// ( 敬請期待放在CSS內是預設值，active者由這邊填寫行內background-image切換 )
// i是data第一層循環，是跟日期
// index是data第二層循環，是跟data裡面的陣列數量，做slider li裡面用
function buildProductPart ( el, i, index, notyet ) {
  var i = i || 0;
  var index = index || 0;
  var notyet = notyet || false;
  var elBlock = el.querySelector( '.product__block' );
  var elText = elBlock.querySelector( '.product__text' );

  var elIntro = document.createElement( 'div' );
  var spanMonth = document.createElement( 'span' );
  var spanSlash = document.createElement( 'span' );
  var spanDate = document.createElement( 'span' );
  var spanText = document.createElement( 'span' );
  var spanTextNext = document.createElement( 'span' );


  elIntro.classList.add('product__intro');
  spanMonth.classList.add( 'intro--month' );
  spanSlash.innerHTML = '/';
  spanDate.classList.add( 'intro--date' );
  spanText.innerHTML = '好物開搶';
  spanTextNext.innerHTML = '精彩預告';

  elIntro.appendChild( spanMonth );
  elIntro.appendChild( spanSlash );
  elIntro.appendChild( spanDate );
  elIntro.appendChild( spanText );

  // console.log(elBlock);


  // if ( elBlock[index] == 1) {
  // }else{
    // elIntro.appendChild( spanTextNext );
  // }


  // 不是notyet就上每個子項的logo圖
  if ( !notyet ) {
    addNowDate( spanMonth, spanDate );

    // TODO: 決定插入介紹圖片邏輯，如果所有item共用一張圖片(沒有logo那些)，則在CSS內控制即可
    // 如果每個子項logo不一樣(logo檔案命成intro-item-1-1、1-2、1-3第一天第一二三個檔案時)
    // elIntro.style.backgroundImage = 'url(intro-item-' + ( i + 1 ) + '-' + ( index + 1 ) + '.png)';
    // 如果每個子項logo一樣(logo檔案命成intro-item-1、intro-item-2第一天第二天每天同一個檔案時)
    // elIntro.style.backgroundImage = 'url(intro-item-' + ( i + 1 ) + '.png)';

  } else { // 是notyet就上之後的日期
    addNowDate( spanMonth, spanDate, (index + 1));
  }

  // TODO: 決定插入part的地方，直式類宮格從最前面插入即可，橫式類宮格(圖左文右)則在text內最前面插入
  // 直式
  // elBlock.insertBefore( elIntro, elBlock.firstChild );
  // 橫式
  elText.insertBefore( elIntro, elText.firstChild );
}

// 每日換日期(給一個參數可以改變日期，使日期可以類似+1、+2這樣的方式處理)
function addNowDate(elMonth, elDate, dateChange){
  var startDay = new Date();
  var dateChange = dateChange || 0;
  var resultDay = addDays( startDay, dateChange );
  var nowMonth = resultDay.getMonth() + 1;
  var nowDate = resultDay.getDate();

  // 把日期填上標題並做補0處理
  elMonth.innerHTML = nowMonth;
  elDate.innerHTML = ( nowDate < 10 ) ? ( '0' + nowDate ) : nowDate;
}

function addDays(date, days) {
  var result = new Date( date );

  result.setDate(date.getDate() + days);
  return result;
}

// 建立輪播
function sliderDailyReady() {
  var sliderDaily = new Swiper( '#sliderDaily', {
    // autoplay: false,
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
    //   nextEl: '#sliderDailyNext',
    //   prevEl: '#sliderDailyPrev',
    // },
    speed: 600,
  } )

  return sliderDaily;
}


// 滾動物件
function ScrollDailySlider() {
  var scrollItem = document.getElementById( 'decorDailySlider' );
  var scrollTitle = document.getElementById( 'DailySliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}