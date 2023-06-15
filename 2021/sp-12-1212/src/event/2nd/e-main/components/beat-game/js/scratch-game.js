import { buildProductNumberLink } from 'utils/js/build-link-by-number.js';
import { initRandomCard } from 'event/1st/e-main/components/scratch-game/random-card.js'
import { initCopy } from 'event/1st/e-main/components/scratch-game/copy-clone.js'
import { scratchReady } from 'event/1st/e-main/components/scratch-game/make-scratch.js'


export var initScratch = [
  cardReady(),
];

function cardReady () {
  // 洗牌與添加獎項底圖
  initRandomCard();

  var scratchCardFront = document.querySelector( '#scratchBottom img' );
  // 先隱藏圖片避免塗層load出來前就被看到
  scratchCardFront.style.opacity = 0

  scratchCardFront.onload = function () {
    // 等圖片load好再開始蓋塗層，才不會刮到一半圖片還沒load完
    // 底圖在scratchReady中塗層覆蓋後會打開
    requestAnimationFrame( function () {
      scratchReady( afterScratch );
    });
  }
}

// 刮完後關閉Canvas點擊、啟動檢查非連結則開copy功能
function afterScratch () {
  var canvasBox = document.getElementById( 'canvasBox' );

  // 防止checkAnchor持續被執行造成綁定多次listener而效能低下
  if ( !canvasBox.classList.contains( 'disabled' ) ) checkAnchor( addCopy );

  canvasBox.classList.add( 'disabled' );
}

// 檢查是否有data-copy有則啟動複製
function checkAnchor (callback) {
  var scratchAnchor = document.querySelector( '#scratchBottom a' );
  var dataCopy = scratchAnchor.dataset.copy;

  if ( dataCopy ) {
    if ( typeof callback === 'function' ) callback(dataCopy);
  }
}

function addCopy (value) {
  var scratchAnchor = document.querySelector( '#scratchBottom a' );
  scratchAnchor.addEventListener( 'click', function () {
    initCopy( value );
    showPop();
  }, false);
}

function showPop () {
  var scratchAnchor = document.querySelector( '#scratchBottom a' );
  var scratchPop = document.querySelector( '#scratchBottom .scratch__popup' );

  scratchAnchor.classList.add( 'disabled' );
  scratchPop.classList.add( 'active' );

  setTimeout( function () {
    scratchPop.classList.remove( 'active' );
    scratchAnchor.classList.remove( 'disabled' );
  }, 1000)
}
