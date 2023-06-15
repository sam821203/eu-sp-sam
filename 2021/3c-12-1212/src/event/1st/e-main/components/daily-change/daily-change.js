import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { sliceArrayByNumber } from 'utils/js/handle-array.js'

export var initDailyChange = dailyChangeReady();

function dailyChangeReady () {
  // 每日換品的時間現在移出去外面統一設定
  var dailyArray = dailyObject.oneDay;
  var dateNow = new Date();
  var checkDate1 = new Date( '2021/12/10 00:00' );
  var checkDate2 = new Date( '2021/12/13 00:00' );
  var checkDateIndex1;
  var checkDateIndex2;

  dailyArray.forEach( function ( date, index ) {
    if ( date.getTime() == checkDate1.getTime() ) checkDateIndex1 = index;
    if ( date.getTime() == checkDate2.getTime() ) checkDateIndex2 = index;
  } );

  var buildArray = buildTimeItems( checkDateIndex1, checkDateIndex2 );

  dailyArray.forEach( function ( date, index, thisArray ) {
    // 如果小於當前日期就跳出
    if ( dateNow < date ) return false;

    // 如果不是最後一天的話就繼續
    if ( index != thisArray.length - 1 ) {
      // 因為最後一天thisArray[index + 1]會變成undefined，因此要先檢查是否最後一天
      // 如果大於當前日期但是小於下一個日期就是目標，因此非目標就跳出
      if ( !( dateNow < thisArray[index + 1] ) ) return false;

      if ( buildArray[index].length == 2 ) {
        buildArray[index].forEach( function ( el ) {
          var itemMask = el.querySelector( '.product__change' );

          itemMask.classList.add( 'active' );
          el.classList.add( 'active' );
        } );

        buildArray[index + 1].forEach( function ( el ) {
          el.classList.add( 'active' );
        } );
      } else if ( buildArray[index].length == 4 ) {
        buildArray[index].forEach( function ( el ) {
          var itemMask = el.querySelector( '.product__change' );

          itemMask.classList.add( 'active' );
          el.classList.add( 'active' );
        } );
      }
    }

      // if ( buildArray[index + 1].length == 4 ) {

      // }

    // 最後一天則執行
    // } else {
    //   var activeItems = buildItemsActive( index, 4 );
    //   // 最後一天連開四個
    //   activeItems.forEach( function ( el ) {
    //     var itemMask = el.querySelector( '.product__change' );

    //     itemMask.classList.add( 'active' );
    //   });
    // }
  });

}

function buildTimeItems ( ruleIndex1, ruleIndex2 ) {
  var dailyChangeDom = document.querySelector( '#dailyChange .product__wrap' );
  var dailyChangeItems = Array.apply( null, dailyChangeDom.querySelectorAll( '.product' ) );
  var activeItemWrap;

  if ( !ruleIndex1 && !ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );

    activeItemWrap = sliceArrayByNumber( twoItemArray, 2 );
  } else if ( ruleIndex1 && !ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );
    var fourItemArray = dailyChangeItems.slice( ruleIndex1 * 2, dailyChangeItems.length );

    var sliceTwoItemArray = sliceArrayByNumber( twoItemArray, 2 );
    var sliceFourItemArray = sliceArrayByNumber( fourItemArray, 4 );

    var activeItemWrap = sliceTwoItemArray.concat( sliceFourItemArray );

  } else if ( ruleIndex1 && ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );
    var fourItemArray = dailyChangeItems.slice( ruleIndex1 * 2, ruleIndex2 * 4 );
    var twoItemArray2 = dailyChangeItems.slice( ruleIndex2 * 2, dailyChangeItems.length );

    var sliceTwoItemArray = sliceArrayByNumber( twoItemArray, 2 );
    var sliceFourItemArray = sliceArrayByNumber( fourItemArray, 4 );
    var sliceFourItemArray2 = sliceArrayByNumber( twoItemArray2, 2 );

    var activeItemWrap = sliceTwoItemArray.concat( sliceFourItemArray, sliceFourItemArray2 );
  }
  // console.log(activeItemWrap);
  return activeItemWrap;
}

function buildItemsActive ( ruleIndex1, ruleIndex2 ) {
  var index = index || 0;
  var gapRule = gapRule || 1;
  var dailyChangeDom = document.querySelector( '#dailyChange .product__wrap' );
  var dailyChangeItems = Array.apply( null, dailyChangeDom.querySelectorAll( '.product' ) );
  var activeItemWrap;
  if ( !ruleIndex1 && !ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );

    activeItemWrap = sliceArrayByNumber( twoItemArray, 2 );
  } else if ( ruleIndex1 && !ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );
    var fourItemArray = dailyChangeItems.slice( ruleIndex1 * 2, dailyChangeItems.length );

    var sliceTwoItemArray = sliceArrayByNumber( twoItemArray, 2 );
    var sliceFourItemArray = sliceArrayByNumber( fourItemArray, 4 );

    var activeItemWrap = sliceTwoItemArray.concat( sliceFourItemArray );

  } else if ( ruleIndex1 && ruleIndex2 ) {
    var twoItemArray = dailyChangeItems.slice( 0, ruleIndex1 * 2 );
    var fourItemArray = dailyChangeItems.slice( ruleIndex1 * 2, ruleIndex2 * 4 );
    var twoItemArray2 = dailyChangeItems.slice( ruleIndex2 * 2, dailyChangeItems.length );

    var sliceTwoItemArray = sliceArrayByNumber( twoItemArray, 2 );
    var sliceFourItemArray = sliceArrayByNumber( fourItemArray, 4 );
    var sliceFourItemArray2 = sliceArrayByNumber( twoItemArray2, 2 );

    var activeItemWrap = sliceTwoItemArray.concat( sliceFourItemArray, sliceFourItemArray2 );
  }
  console.log(activeItemWrap);

  // activeItemWrap[0].forEach( function ( el ) {
  //   el.classList.add( 'active' );
  // } );

  // var activeItems = Array.apply( null, dailyChangeDom.querySelectorAll( '.product.active' ) );
  // return activeItems;
}