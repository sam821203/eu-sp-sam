// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { sliceArrayByNumber } from 'utils/js/handle-array.js'
import { moveActiveToItem } from 'utils/js/move-active.js'


export var initDailyTab = [
  buildDailyTab(),
];

function buildDailyTab () {
  // 每日換品的時間移出去外面統一設定
  var dailyArray = dailyObject.oneDay2;
  var dateNow = new Date();

  dailyArray.forEach( function ( date, index, thisArray ) {
    // 如果小於當前日期就跳出
    if ( dateNow < date ) return false;

    // 如果不是最後一天的話就繼續
    if ( index != thisArray.length - 1 ) {
      // 因為最後一天thisArray[index + 1]會變成undefined，因此要先檢查是否最後一天
      // 如果大於當前日期但是小於下一個日期就是目標，因此非目標就跳出
      if ( !( dateNow < thisArray[index + 1] ) ) return false;

      buildDateTabItem( date, index );
      dateContentActive( index );

      // 如果是最後一天則執行
    } else {
      buildDateTabItem( date, index );
      dateContentActive( index );
    }
  });
}

function buildDateTabItem ( dateNow , index ) {
  var dailyArray = dailyObject.oneDay2;
  var partDailyArray = sliceArrayByNumber( dailyArray, 5 );
  var activeRound = Math.floor( index / 5 );
  var nowPartDateArray = partDailyArray[activeRound];
  var activeIndex;
  var monthLanguage = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  var weekLanguage = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
  var tabWrap = document.getElementById( 'dailyTab' );

  nowPartDateArray.forEach( function ( itemDate, itemIndex ) {
    if ( dateNow >= itemDate ) activeIndex = itemIndex;

    var dateMonth = document.createElement( 'div' );
    var dateNumber = document.createElement( 'div' );
    var dateWeek = document.createElement( 'div' );
    var tabItem = document.createElement( 'li' );

    dateMonth.classList.add( 'date__month' );
    dateNumber.classList.add( 'date__number' );
    dateWeek.classList.add( 'date__week' );
    tabItem.classList.add( 'tab__item' );
    tabItem.classList.add( 'tab__item--daily' );

    dateMonth.innerHTML = monthLanguage[itemDate.getMonth()];
    dateNumber.innerHTML = itemDate.getDate();
    dateWeek.innerHTML = weekLanguage[itemDate.getDay()];

    tabItem.appendChild( dateMonth );
    tabItem.appendChild( dateNumber );
    tabItem.appendChild( dateWeek );

    tabWrap.appendChild( tabItem );
  } );

  var activeItem = tabWrap.querySelectorAll( '.tab__item--daily' )[activeIndex];

  activeItem.classList.add( 'active' );

  dailyTabReady( (activeRound * 5) );
}

function dateContentActive ( index ) {
  var tabContentBlock = document.getElementById('dailyTabContent');
  var contentBox = Array.apply( null, tabContentBlock.querySelectorAll( '.content__box' ) );

  contentBox[index].classList.add( 'active' );
  sliderTabReady( index );

}

// Tab 頁籤
function dailyTabReady ( activeIndex ) {
  var activeIndex = activeIndex || 0;
  var tabBox = document.getElementById('dailyTab');
  var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item--daily'));
  var tabContentBlock = document.getElementById('dailyTabContent');
  var contentBox = Array.apply( null, tabContentBlock.querySelectorAll( '.content__box' ) );

  sliderTabReady(activeIndex);

  tabItems.forEach(function (el, index) {
    el.addEventListener('click', function() {
      // console.log('有接!');
      moveActiveToItem( tabItems, index);
      moveActiveToItem( contentBox, (activeIndex + index) );
      sliderTabReady( (activeIndex + index) );
    });
  });

}

function sliderTabReady(index) {
  var index = index || 0;
  var arrayTabContents = Array.apply(null, document.querySelectorAll('.tab__slider'));

  var sliderTabContents = new Swiper( arrayTabContents[index], {
    freeMode: true,
    slidesPerView: 2.5,
    observer: true,
    observeParents: true,
  })
}