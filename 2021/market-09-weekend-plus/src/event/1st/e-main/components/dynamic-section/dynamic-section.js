import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { changePriceFormat } from 'utils/js/change-price.js'

export var initDynamicSection = buildContent();

function buildContent(){
  var dynamicSection = document.querySelector( '#dynamicSection .product__wrap' );

  dataDynamicPlus.forEach(function(el){
    var dataChild = buildDynamicAutoSync( el, {
      outerTag: 'div',
      isSlider: false,
    } );

    // 建立回饋資訊
    buildDynamicBack(dataChild, el);

    dynamicSection.appendChild( dataChild );
  });
}

// 建立回饋資訊
function buildDynamicBack ( dataDom, el ) {
  var backItems = Array.apply( null, dataDom.querySelectorAll( '.back__block div' ) );
  // 計算回饋加總
  var backPlus = 0;

  // 理論上在buildLayout已經檢查過不會產生多餘沒填的item，不過因為有預設值都不填，因此還是多做display none檢查
  if ( typeof el.back === 'undefined' ) {
    backItems.forEach( function ( item ) {
      item.style.display = 'none';
    });
    return false;
  }

  backItems.forEach( function ( item ) {
    var itemClassName = item.className;
    var itemSpans = Array.apply( null, item.querySelectorAll( 'span' ) );

    // 理論上在buildLayout已經檢查過不會產生多餘沒填的item，不過因為有預設值都不填，因此還是多做display none檢查
    switch ( itemClassName ) {
      case 'back--lp':
        if ( !el.back.lp ) item.style.display = 'none';
        else {
          backPlus += el.back.lp;
          itemSpans[2].innerHTML = changePriceFormat( el.back.lp );
        }
        break;
      case 'back--ticket':
        if ( !el.back.ticket ) item.style.display = 'none';
        else {
          backPlus += el.back.ticket;
          itemSpans[2].innerHTML = changePriceFormat( el.back.ticket );
        }
        break;
      case 'back--gift':
        if ( !el.back.gift ) item.style.display = 'none';
        else {
          backPlus += el.back.gift;
          itemSpans[2].innerHTML = changePriceFormat( el.back.gift );
        }
        break;
      case 'back--card':
        if ( !el.back.card ) item.style.display = 'none';
        else {
          backPlus += el.back.card;
          itemSpans[2].innerHTML = changePriceFormat( el.back.card );
        }
        break;
    }
  });

  var totalBack = dataDom.querySelector( '.total__back span:last-child' );
  totalBack.innerHTML = changePriceFormat(backPlus);
}