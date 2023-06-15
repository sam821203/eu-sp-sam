export var initInfoCover = checkAppOpen()

import { isApp } from 'utils/js/detect'

// 是app則打開puzzle區，否則顯示QR code、下載區塊
// TODO: 測試時分別要關掉intro-cover(蓋板)、puzzle.js(load canvas)、check.js(抽卡)、random-card.js(load 卡面資料)，共四個開關才能在網頁開啟遊戲
// check.js( e() -> !e() )，其他三個js( isAPP() -> !isAPP() )
// =============================
export function checkAppOpen() {
  // var infoCover = document.getElementById('infoCover')
  var gameWrap = document.getElementById('gameWrap')

  // TODO: dev用isAPP()就可以在網頁看到，注意production版要改成!isAPP()才行(打開!驚嘆號)
  // if ( isApp() ) {
  //   gameWrap.classList.add('active')
  // } else {
  //   infoCover.classList.add('active')
  // }

  gameWrap.classList.add('active');
}
