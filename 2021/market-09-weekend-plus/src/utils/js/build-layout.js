// 設定CSS用結構
// 因為此結構會隨著專案改變，因此獨立拉出一支檔案，之後在此維護結構即可，組版邏輯都可以不用動
export function buildDynamicLayout (itemsArray) {
  // TODO:回饋層內容(line point、提貨券、禮物卡、刷卡)，此處可修改
  var backItems = itemsArray || ['lp', 'ticket', 'gift', 'card'];

  // outTag內的最外框，放背景圖、padding-bottom等比例底層
  var productWrap = document.createElement( 'div' );
  // 第二層連結 + 等比例上層
  var anchorElement = document.createElement( 'a' );
  // 第三層內框，為品項總成塞給a連結用，內框內可以任意調整架構
  var productBlock = document.createElement( 'div' );

  // 從這開始可任意調動內部結構
  // a是結構的一環所以會在此建好，name、img、price則在外面建立判斷自動變價後塞入

  var productInfoWrap = document.createElement( 'div' );
  var productNameWrap = document.createElement( 'div' );
  var productImgWrap = document.createElement( 'div' );
  var productPriceWrap = document.createElement( 'div' );
  var productBackWrap = document.createElement( 'div' );

  productWrap.classList.add( 'product' );
  productWrap.classList.add( 'product--dynamic' );
  productBlock.classList.add( 'product__block' );

  productInfoWrap.classList.add( 'product__info' );
  productNameWrap.classList.add( 'product__name' );
  productImgWrap.classList.add( 'product__img' );
  productPriceWrap.classList.add( 'product__price' );
  productBackWrap.classList.add( 'product__back' );

  productInfoWrap.appendChild( productNameWrap );
  productInfoWrap.appendChild( productImgWrap );

  // 填入priceElement
  var priceText = document.createElement( 'span' );
  var priceSign = document.createElement( 'span' );

  priceText.innerHTML = '活動價';
  priceSign.innerHTML = '$';
  productPriceWrap.appendChild( priceText );
  productPriceWrap.appendChild( priceSign );

  var backBlock = document.createElement( 'div' );

  backItems.forEach( function ( el ) {
    var elWrap = document.createElement( 'div' );
    var elText = document.createElement( 'span' );
    var backText = document.createElement( 'span' );
    var countText = document.createElement( 'span' );
    backText.innerHTML = '最高回饋';

    switch ( el ) {
      case 'lp':
        elText.innerHTML = 'Line Point';
        elText.classList.add( 'color--line-point' );
        elWrap.classList.add( 'back--lp' );
        break;
      case 'ticket':
        elText.innerHTML = '東森提貨券';
        elWrap.classList.add( 'back--ticket' );
        break;
      case 'gift':
        elText.innerHTML = '禮物卡';
        elWrap.classList.add( 'back--gift' );
        break;
      case 'card':
        elText.innerHTML = '刷卡';
        elWrap.classList.add( 'back--card' );
        break;
    }
    elWrap.appendChild( elText );
    elWrap.appendChild( backText );
    elWrap.appendChild( countText );

    // 回饋層包起來
    backBlock.appendChild( elWrap );
  } );

  backBlock.classList.add( 'back__block' );

  // 總回饋
  var totalText = document.createElement( 'div' );
  var totalPrice = document.createElement( 'div' );
  var totalSign = priceSign.cloneNode(true);
  var totalElements = document.createElement( 'span' );
  var totalBlock = document.createElement( 'div' );

  totalText.innerHTML = '最高現省';
  totalText.classList.add('total__text');
  totalPrice.appendChild( totalSign );
  totalPrice.appendChild( totalElements );
  totalPrice.classList.add( 'total__back' );
  totalBlock.appendChild( totalText );
  totalBlock.appendChild( totalPrice );
  totalBlock.classList.add('total__block');


  // 回饋外框包起來回饋層、總回饋
  productBackWrap.appendChild( backBlock );
  productBackWrap.appendChild( totalBlock );

  // 此步驟之上為內部組裝，至此內部完成，block為內部總成
  // 最後三層( block、anchor、wrap )為包裹layout用的外框
  // 用產block層把圖片和文字的wrap包起來
  productBlock.appendChild( productInfoWrap );
  productBlock.appendChild( productPriceWrap );
  productBlock.appendChild( productBackWrap );

  // 再用產出來的a把block層包起來
  anchorElement.appendChild( productBlock );

  // 把a塞在最外層的wrap
  productWrap.appendChild( anchorElement );

  return productWrap;
}
