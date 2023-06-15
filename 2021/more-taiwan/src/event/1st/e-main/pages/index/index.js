document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js';
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import 'swiper/swiper-bundle.css';
import 'vendors/js/swiper-ie-polyfill.js';
import Swiper from 'swiper/swiper-bundle.min.js';

// SVG classList.add() not work in IE11, add polyfill
import 'svg-classlist-polyfill'

// import smooth scroll polyfill
import smoothscroll from 'smoothscroll-polyfill';

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert';
import { notSupportAndroid5 } from 'utils/js/android5-alert';
// import { initGlobalUXItems } from 'utils/js/generate';

/**
 * import components js modules
 */
import { buildNav } from 'event/1st/e-main/components/nav/nav.js';
import { buildMap } from 'event/1st/e-main/components/map-taiwan/map-taiwan.js';
import { buildCityItems } from 'event/1st/e-main/components/city-items/city-items.js';

/**
 * page js
 */
import { moveActiveToItem } from 'utils/js/move-active.js'
import { twoArrayCleanMoveActive } from 'utils/js/move-active.js'
import { cleanArrayActive } from 'utils/js/move-active.js'
import { activeScrollLeftToMiddle } from 'utils/js/scroll.js'

// global slider
var itemSlider;

// nav active
var navItems = document.querySelectorAll( '.nav__item' );

navItems.forEach( function (item) {
  item.addEventListener( 'click', function () {
    checkItem( item.innerHTML );
  } );
} );

// map active
var svg = document.getElementById( 'svgTaiwan' );
var mapTaiwan = svg.getElementById( 'mapTaiwan' );
var cityGroups = mapTaiwan.querySelectorAll( 'g[data-city]' );
var cityPaths = mapTaiwan.querySelectorAll( 'path[data-city]' );

cityGroups.forEach( function ( item ) {
  mapAddCheck( item );
} );

cityPaths.forEach( function ( item ) {
  mapAddCheck( item );
} );

clickCancelOverlay();
initRwd();

function mapAddCheck (item) {
  item.addEventListener( 'click', function () {
    checkItem( item.dataset.city );
  } );
}

function checkItem ( thisItemName ) {
  // console.log( thisItemName );

  // check nav
  var navItems = document.querySelectorAll( '.nav__item' );

  navItems.forEach( function ( item, index, thisArray ) {
    if ( item.innerHTML === thisItemName ) {
      moveActiveToItem( thisArray, index );
      activeScrollLeftToMiddle(item);
    }
  } );

  // check map
  var svg = document.getElementById( 'svgTaiwan' );
  var mapTaiwan = svg.getElementById( 'mapTaiwan' );
  var cityGroups = mapTaiwan.querySelectorAll( 'g[data-city]' );
  var cityPaths = mapTaiwan.querySelectorAll( 'path[data-city]' );

  // 因為縣市有兩種呈現方式(group與path)，因此在跑迴圈清除既有的active時，兩種都得跑一次清除
  cityGroups.forEach( function ( item, index, thisArray ) {
    if ( item.dataset.city === thisItemName ) {
      twoArrayCleanMoveActive( thisArray, index, cityPaths );
    }
  } );

  // 因為縣市有兩種呈現方式(group與path)，因此在跑迴圈清除既有的active時，兩種都得跑一次清除
  cityPaths.forEach( function ( item, index, thisArray ) {
    if ( item.dataset.city === thisItemName ) {
      twoArrayCleanMoveActive( thisArray, index, cityGroups );
    }
  } );

  // check cityItems
  var promoItemsWrap = document.getElementById( 'promoItemsWrap' );

  // 如果沒傳入值就不打開
  if ( thisItemName ) promoItemsWrap.classList.add( 'active' );

  var cityItems = document.querySelectorAll( '.swiper-slide' );

  cityItems.forEach( function ( item, index ) {
    if ( item.dataset.city === thisItemName ) {
      // 先打開蓋版，slider才能抓寬度
      promoItemsWrap.classList.add( 'active' );
      // 已經成立輪播(沒關掉清除)，就不重新建立輪播
      if ( typeof itemSlider === 'undefined' ) itemSliderReady( index );
      else {
        itemSlider.slideTo( index );
      }
    }
  } );
}

function itemSliderReady ( index ) {
  var initIndex = index || 0;
  var cityItems = document.querySelectorAll( '.swiper-slide' );

  itemSlider = new Swiper( '#itemSlider', {
    direction : window.innerWidth >= 960 ? 'vertical': 'horizontal',
    effect: window.innerWidth >= 960 ? 'slide' : 'flip',
    flipEffect: {
      slideShadows : false,
    },
    initialSlide: initIndex,
    grabCursor: true,
    speed: 600,
    on: {
      slideChange: function () {
        var thisSliderIndex = this.activeIndex;

        // 因為slideChange一開始就觸發，因此要排除一開始，也能用來重新進入checkItem後的終止無限迴權
        if ( initIndex === thisSliderIndex ) return;
        // 排除一開始後要更新initIndex才能在重新back回到開始頁時不被排外
        initIndex = thisSliderIndex;

        var nextSlide = cityItems[thisSliderIndex];
        var itemName = nextSlide.dataset.city;

        checkItem( itemName );
      },
    }
  } );
}

function clickCancelOverlay () {
  var promoItemsWrap = document.getElementById( 'promoItemsWrap' );
  var iconCancel = document.getElementById( 'iconCancel' );

  iconCancel.addEventListener( 'click', function ( e ) {
    e.stopPropagation();
    promoItemsWrap.classList.remove( 'active' );
    cleanNavMap();
  } );

  promoItemsWrap.addEventListener( 'click', function () {
    promoItemsWrap.classList.remove( 'active' );
    cleanNavMap();
  } );
}

function cleanNavMap(){
  var navItems = document.querySelectorAll( '.nav__item' );

  var svg = document.getElementById( 'svgTaiwan' );
  var mapTaiwan = svg.getElementById( 'mapTaiwan' );
  var cityGroups = mapTaiwan.querySelectorAll( 'g[data-city]' );
  var cityPaths = mapTaiwan.querySelectorAll( 'path[data-city]' );

  cleanArrayActive( navItems );
  cleanArrayActive( cityGroups );
  cleanArrayActive( cityPaths );
}

function initRwd () {
  window.addEventListener( 'load', rwdReady);
  window.addEventListener( 'resize', rwdReady);

  function rwdReady () {
    // 清掉輪播讓他重新抓寬度
    if ( typeof itemSlider !== 'undefined' ) {
      itemSlider.destroy();
      itemSlider = undefined;
    }

    if ( window.innerWidth >= 960 ) {
      var navItems = document.querySelectorAll( '.nav__item' );
      navItems[0].click();
    } else {
      var iconCancel = document.getElementById( 'iconCancel' );
      iconCancel.click();
    }
  }
}