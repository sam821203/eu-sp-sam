// import { moveActiveToItem } from 'utils/js/move-active.js'

export var initMiddleFixed = middleFixedReady();

function middleFixedReady () {
  // var navWrap = document.getElementById( 'navWrap' );
  // var navItems = Array.apply( null, navWrap.querySelectorAll( '.nav__item' ) );
  // var activeIndex = 0;

  // navItems.forEach( function ( el, index, thisArray ) {
  //   if ( el.classList.contains( 'active' ) ) {
  //     // 此兩者會因為resize後跑位，因此init初始時、click時、resize時都要重新命變數抓最新值
  //     var offsetLeft = el.offsetLeft;
  //     var elWidth = el.clientWidth;

  //     activeIndex = index;
  //     moveDecor( offsetLeft, elWidth );
  //   }

  //   el.addEventListener( 'click', function () {
  //     // 此兩者會因為resize後跑位，因此init初始時、click時、resize時都要重新命變數抓最新值
  //     var offsetLeft = el.offsetLeft;
  //     var elWidth = el.clientWidth;

  //     activeIndex = index;
  //     moveActiveToItem( thisArray, index );
  //     moveDecor( offsetLeft, elWidth );
  //   })
  // });

  // window.addEventListener( 'resize', function () {
  //   // 此兩者會因為resize後跑位，因此init初始時、click時、resize時都要重新命變數抓最新值
  //   var offsetLeft = navItems[activeIndex].offsetLeft;
  //   var nowElWidth = navItems[activeIndex].clientWidth;

  //   moveDecor( offsetLeft, nowElWidth );
  // });
}

// function moveDecor (offsetLeft, targetWidth) {
//   var decorNav = document.getElementById( 'decorNav' );
//   decorNav.style.left = offsetLeft + 'px';
//   if ( targetWidth ) decorNav.style.width = targetWidth + 'px';
// }
