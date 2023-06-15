import { isApp } from 'utils/js/detect'
import { isWindowWidth } from 'utils/js/detect'
export var initInfoCover = checkAppOpen()


// 是app則打開puzzle區，否則顯示QR code、下載區塊
// TODO: 測試時分別要關掉intro-cover(蓋板)、puzzle.js(load canvas)、check.js(抽卡)、random-card.js(load 卡面資料)，共四個開關才能在網頁開啟遊戲
// check.js( e() -> !e() )，其他三個js( isAPP() -> !isAPP() )
// =============================
function checkAppOpen() {
  // var infoCover = document.getElementById('infoCover')
  // var gameWrap = document.getElementById('gameWrap')

  // console.log('3333');
  // TODO: dev用isAPP()就可以在網頁看到，注意production版要改成!isAPP()才行(打開!驚嘆號)
  if ( isApp() ) {
    location.href =
    "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FPuzzle";  
  }
}
