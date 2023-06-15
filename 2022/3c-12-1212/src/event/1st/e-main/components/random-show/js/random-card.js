/**
 * 實作MVC分離：此處為V，功能是擷取C留下來的篩選陣列填入HTML、是實際被包進app-bundle.js的部分、會被外人直接看到
 * M的部分為data-card.js，是交由企劃填寫機率部分
 * C的部分由check.js判斷是否要load data進來、controller.js實作擲骰機制並pass擲骰過後的陣列給Ｖ，好處是擲骰機制、刪除M與C的程式碼機制全部由C實作，不在V中的app-bundle.js，降低被外人發現的機會
 * 各檔案在random-cars/js中的備份檔有註解說明、在assets資料夾中為暴露出去的檔案都不會有註解
 */
 import { isApp } from 'utils/js/detect'

import { buildProductNumberLink } from 'utils/js/build-link'

/**
 * TODO: dev模式修改3個地方即可，注意production全部都要關掉
 * 1. controller console.log打開就能顯示「傳出去」骰到品的陣列，不用實際點開卡面
 * 2. 此處function loadCardFront console.log打開就能顯示「接收到」骰到品的陣列，不用實際點開卡面
 * 3. controller function makeRandom console.log打開就能顯示骰到的品，不用實際點開卡面
 */

// TODO:因為是完成後才開啟，所以checkOpen拿到資料後先不load，但要提早拿資料避免發現check.js
export var initRandomCard = checkAppOpen;

// 是app則打開翻頁區塊並組建卡面，否則顯示QR code、下載區塊
// =============================
export function checkAppOpen() {

  // TODO: dev用!isAPP()就可以在網頁load資料，注意production版要改成isAPP()才行(關掉!驚嘆號)
  if ( !isApp() ) {
    // var carWrap = document.getElementById('cardWrap');

    // carWrap.classList.add('active'); // 打開這個動作改到puzzle完成才執行
    loadData();
  }
}
// =============================

// 填入卡面、連結
// =============================
function loadCardFront(callback) {
  // 從controller來的連結
  var cardData = finalCard;
  //TODO: dev用，打開知道最終卡面陣列，注意production版要關掉
  // console.log(cardData);
  // console.log(444);
  var cardFront = document.getElementById('popUpWrap');
  var timeStamp = new Date().getTime();

    var cardLink = cardFront.querySelector('a');
    var cardImg = cardFront.querySelector('img');
    if (cardData[0].s) {
      cardImg.src = cardData[0].s + '.png?' + timeStamp ;
    } else {
      cardImg.src = cardData[0].i + '.png?' + timeStamp;
    }

  if ( cardData[0].c ) {
    cardLink.dataset.copy = cardData[0].c
  }

  buildProductNumberLink( cardData[0], cardLink, ['n', 'w', 'm', 'a'] );

  // 給callback，load完再執行
  if ( typeof callback === 'function' ) return callback();
}
// =============================

// 每100毫秒檢查一次data是否載入，載入後執行load卡面、刪除來源、關閉檢查
// =============================
function loadData() {
  var checkDataLoad = setInterval(function () {

    if ( typeof finalCard !== 'undefined' ) {
      // load完卡面再開放點擊
      clearInterval( checkDataLoad );
      loadCardFront();
    }
  }, 100);
}
// =============================