import { siblingRandom } from 'utils/js/build-random.js'
import { initRandomCard } from 'event/2nd/e-main/components/game-w3m3/js/random-card.js'
import { initCopy } from 'event/2nd/e-main/components/game-w3m3/js/copy-clone.js'

export var initGameW3m3 = [
  gameW3m3Ready(),
];

function gameW3m3Ready () {
  var startWaitingAnimation = setInterval( function () { chooseRandomW3M3Item() }, 1000 );
  var gameW3m3Items = Array.apply( null, document.querySelectorAll( '#gameW3m3Wrap li' ) );

  gameW3m3Items.forEach( function ( el, index, thisArray ) {
    var itemBottom = el.querySelector( '.bottom__wrap' );
    var itemTop = el.querySelector( '.top__wrap' );
    el.addEventListener( 'click', function () {
      // 洗牌與添加獎項底圖
      initRandomCard();

      // 下為戳盤動畫處理
      el.style.zIndex = 1;
      itemBottom.classList.add( 'active' );
      thisArray.forEach( function ( el ) {
        el.removeEventListener( 'click', function () { return } );
        el.style.pointerEvents = 'none';
      });
      setTimeout( function () {
        itemBottom.classList.remove( 'active' );
        itemTop.classList.add( 'active' );
        showItem();
      }, 3000);
      clearInterval(startWaitingAnimation);
    });
  });
}

// 戳盤隨機閃動
function chooseRandomW3M3Item() {
  var gameW3m3Items = Array.apply( null, document.querySelectorAll( '#gameW3m3Wrap li' ) );
  var chooseItemIndex = siblingRandom( gameW3m3Items.length, 'siblingGameCheckW3M3AnimationIndex' );
  // console.log(chooseItemIndex);

  gameW3m3Items.forEach( function ( item ) {
    item.classList.remove( 'active' );
  } );
  gameW3m3Items[chooseItemIndex].classList.add( 'active' );
}

// 秀出圖片及後面操作
function showItem () {
  var itemWrap = document.querySelector( '#gamePopupWrap' );
  var itemAnchor = document.querySelector( '#gamePopupWrap a' );
  itemWrap.classList.add( 'active' );

  // 防止checkAnchor持續被執行造成綁定多次listener而效能低下
  if ( !itemAnchor.classList.contains( 'disabled' ) ) checkAnchor(itemAnchor, addCopy );

  itemAnchor.classList.add( 'disabled' );
}

// 檢查是否有data-copy有則啟動複製
function checkAnchor (anchorEl, callback) {
  var dataCopy = anchorEl.dataset.copy;

  if ( dataCopy ) {
    if ( typeof callback === 'function' ) callback(anchorEl, dataCopy);
  }
}

function addCopy (anchorEl, value) {
  anchorEl.addEventListener( 'click', function () {
    initCopy( value );
    showPop(anchorEl);
  }, false);
}

function showPop ( anchorEl ) {
  var itemAnchor = anchorEl;
  var itemPopup = anchorEl.querySelector( '.popup__alert' );

  itemAnchor.classList.add( 'disabled' );
  itemPopup.classList.add( 'active' );

  setTimeout( function () {
    itemPopup.classList.remove( 'active' );
    itemAnchor.classList.remove( 'disabled' );
  }, 1000)
}

