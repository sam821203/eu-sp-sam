// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

export var initWeek = [
  weekActiveReady ()
];

function weekActiveReady () {
  var weekContent = document.getElementById( 'weekContent' );
  var weekContentItems = Array.apply( null, weekContent.querySelectorAll( '.content__box' ) );
  // 轉換成string
  var weekNow = new Date().getDay() + '';

  weekContentItems.forEach( function ( el, index ) {
    // 可能會有選項同時符合不同星期，會用空白分隔，所以先切空白
    var weekGroupArray = el.dataset.week.split( '' );

    el.classList.remove( 'active' );
    // 遍歷group陣列，找出符合的group都加上
    weekGroupArray.forEach( function ( group ) {
      // group內會是string，weekNow是number，可以用==處理也能用這邊的作法，把weekNow轉成string然後用===
      if ( group === weekNow ) {
        el.classList.add( 'active' );
      };
    });
  } );
}
