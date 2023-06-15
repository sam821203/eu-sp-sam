document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
// import WOW from 'wow.js/dist/wow.js';
// new WOW().init();

// swiper 6.1.2 no IE, add polyfill
// import 'swiper/swiper-bundle.css';
// import 'vendors/js/swiper-ie-polyfill.js';

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert';
import { notSupportAndroid5 } from 'utils/js/android5-alert';
import { initGlobalUXItems } from 'utils/js/generate';

/**
 * import components js modules
 */
import { initNav } from 'event/1st/e-main/components/nav/nav.js';
import { initFilter } from 'event/1st/e-main/components/filter-w2m1/filter-w2m1.js';
import { initWeek } from 'event/1st/e-main/components/week-show/week-show.js';
import { initMiddleFixed } from 'event/1st/e-main/components/middle-big/middle-big.js';
import { initAside } from 'event/1st/e-main/components/aside-nav/aside-nav.js';


/**
 * import utils js modules
 */
import { isApp } from 'utils/js/detect.js';
import { getScrollTop } from 'utils/js/detect.js';
import { setScrollTop } from 'utils/js/detect.js';
import { moveActiveToItem } from 'utils/js/move-active.js';


/** page js **/
// 記錄nav active的index，在go back復原時要回覆group區塊用
var navActiveIndex = 0;
// 記錄body scroll的距離，切換bank detail與group區塊時用
var bodyScrollTop = 0;
// 記錄nav初始距離頂部的距離為上方區塊的高度，切換bank detail實用
var initNavOffsetTop = document.getElementById( 'spWrap' ).clientHeight;

getUrlBank();
addMinHeight();
btnBindBankDetail();
setNavClick();
setGoBackClick();

window.addEventListener( 'resize', function () {
  addMinHeight();
});

// 為了讓不足一頁的頁面也能有scrollbar能sticky nav，否則sticky nav切到高度不夠的tab時scrollbar會消失
function addMinHeight () {
  var mainWrap = document.getElementById( 'spWrap' );
  var navWrap = document.getElementById( 'navWrap' );
  var minScrollHeight = mainWrap.clientHeight + navWrap.clientHeight + window.innerHeight;

  document.body.style.minHeight = minScrollHeight + 'px';
}

// 將所有有data-bank的區塊中的pop按鈕連結正確的detail銀行、寫入click事件
function btnBindBankDetail () {
  var bankAnchorBlock = Array.apply( null, document.querySelectorAll( '[data-bank]' ) );

  bankAnchorBlock.forEach( function ( el ) {
    var popElement = el.querySelector( '.js--pop' );

    // 因為會有a連結而非.js--pop的情況，需要排除所以用if判斷
    if ( popElement ) {
      popElement.addEventListener( 'click', function () {
        var bankName = el.dataset.bank;

        openBankDetail( bankName );
      } );
    }
  });
}

// 當middle big區塊亮起時，對應aside nav亮起正確按鈕(因middle big會由多種來源觸發，故該由它控制aside nav)
function bankDetailBindAside ( bankName ) {
  var bankName = bankName;
  var asideNav = document.getElementById( 'asideNav' );
  var asideItems = Array.apply( null, asideNav.querySelectorAll( '.aside__box' ) );

  asideItems.forEach( function ( item, index ) {
    if ( bankName === item.dataset.bank ) {
      moveActiveToItem( asideItems, index );
    }
  });
}

function openBankDetail ( bankName ) {
  var bigContent = document.getElementById( 'bigContent' );
  var bankDetailBoxes = Array.apply( null, bigContent.querySelectorAll( '.content__box' ) );
  var bankDetailItems = Array.apply( null, bigContent.querySelectorAll( '.bank__wrap' ) );

  bankDetailItems.forEach( function ( bank, index ) {
    if ( bankName !== bank.id ) return false;

    // resetGroup會更新現在body scroll多少，如果大於nav的高度則把頁面固定在nav高度
    resetGroup();

    // resetGroup會更新這兩個全域變數
    if ( bodyScrollTop > initNavOffsetTop ) setScrollTop( initNavOffsetTop );
      moveActiveToItem( bankDetailBoxes, index );
      bankDetailBindAside( bankName );
  });
}

function setNavClick () {
  var navWrap = document.getElementById( 'navWrap' );
  var navItems = Array.apply( null, navWrap.querySelectorAll( '.nav__item' ) );
  var groupItems = Array.apply( null, document.querySelectorAll( '.js--tab' ) );

  // nav click時：更新active index、若有bank detail則關掉、之後更新區塊
  navItems.forEach( function ( el, index ) {
    el.addEventListener( 'click', function () {
      navActiveIndex = index;
      resetBankDetail();
      moveActiveToItem( groupItems, index );
    } );

  } );
}

function setGoBackClick () {
  var bigContent = document.getElementById( 'bigContent' );
  var bankDetailItems = Array.apply( null, bigContent.querySelectorAll( '.bank__wrap' ) );

  bankDetailItems.forEach( function ( el ) {
    var btnGoBack = el.querySelector( '.btn--back' );

    btnGoBack.addEventListener( 'click', runGoBackGroup);
  } );
}

// 執行group歸位，針對記錄好的nav index、body scroll top復原group index與點擊前的位置、清除aside nav active
function runGoBackGroup () {
  var groupItems = Array.apply( null, document.querySelectorAll( '.js--tab' ) );
  var asideNav = document.getElementById( 'asideNav' );
  var asideItems = Array.apply( null, asideNav.querySelectorAll( '.aside__box' ) );

  resetBankDetail();
  groupItems[navActiveIndex].classList.add( 'active' );
  setScrollTop( bodyScrollTop );
  asideItems.forEach( function (el) {
    el.classList.remove( 'active' );
  });
}
// 清除所有group的active並記錄body scroll top值以便之後復原
function resetGroup () {
  var groupItems = Array.apply( null, document.querySelectorAll( '.js--tab' ) );

  bodyScrollTop = getScrollTop();

  groupItems.forEach( function (el) {
    el.classList.remove( 'active' );
  } );
}

// 清除bank detail區塊(會在點go back、點nav、點電梯時用到)
function resetBankDetail () {
  var bigContent = document.getElementById( 'bigContent' );
  var bankDetailBoxes = Array.apply( null, bigContent.querySelectorAll( '.content__box' ) );

  bankDetailBoxes.forEach( function ( el ) {
    el.classList.remove( 'active' );
  });
}

function getUrlBank () {
  var url = location.href;
  var bankName;

  if ( isApp ) url = decodeURIComponent(url);
  if ( url.indexOf( '#' ) == -1 ) return false;

  bankName = url.slice( url.indexOf( '#' ) + 1 );
  openBankDetail( bankName );

}

