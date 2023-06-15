import { moveActiveToItem } from 'utils/js/move-active.js'

export var initFilter = filterReady();

function filterReady () {
  var filterTabWrap = document.getElementById( 'filterTabWrap' );
  var filterItems = Array.apply( null, filterTabWrap.querySelectorAll( '.filter__item' ) );

  filterItems.forEach( function ( el, index, thisArray ) {
    el.addEventListener( 'click', function () {
      var filterGroup = el.dataset.filter;

      moveActiveToItem( thisArray, index );
      runFilter(filterGroup);
    })
  });
}

function runFilter (filterGroup) {
  var filterContent = document.getElementById( 'filterContent' );
  var filterContentItems = Array.apply(null, filterContent.querySelectorAll('.content__box'));
  var filterListItems = Array.apply( null, filterContent.querySelectorAll( '.content__box .promo__wrap li' ) );

  filterListItems.forEach( function ( el ) {
    // 如果參數是all就全show，否則就要檢查
    if ( filterGroup === 'all' ) {
      el.classList.add( 'active' );
    } else {
      // 可能會有選項同時符合a組與b組，會用空白分隔，所以先切空白
      var filterGroupArray = el.dataset.filter.split( '' );

      // console.log(filterGroupArray);
      el.classList.remove( 'active' );

      // 遍歷group陣列，找出符合的group都加上
      filterGroupArray.forEach( function ( group ) {
        if ( group === filterGroup ) el.classList.add( 'active' );
      });

    }
  });

  // 要秀出的list檢查好後，最後檢查如果有空的content__box就關掉否則要show出來
  // 第一區圖片區因為沒有任何activeList也會被一起關起來
  filterContentItems.forEach( function ( el ) {
    var activeList = Array.apply( null, el.querySelectorAll( '.active' ) );

    // console.log(activeList);
    if ( activeList.length == 0 ) {
      el.classList.remove( 'active' );
    } else {
      el.classList.add( 'active' );
    }
  } );

  // 如果參數是all第一區圖片區要打開
  if ( filterGroup === 'all' ) {
    var specialPromo = document.getElementById( 'specialPromo' );

    specialPromo.classList.add( 'active' );
  }

}
