import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initLeftRight = leftRightReady();

function leftRightReady() {
  if(!linkTime && !linkData) return false;

  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(linkTime, [addLeftLink, addLeftImgSrc], 100);
}


// 每日換連結
function addLeftLink(i){
  var leftChangeAnchor = document.getElementById('leftChangeAnchor');
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  leftChangeAnchor.href = makeLink(960, appLink, webLink, mobileLink);
}

function addLeftImgSrc ( i ) {
  if ( linkData[i].toggleClass ) {
    var leftChange = document.getElementById('leftChange');

    leftChange.classList.toggle( 'close' );
  }
  if ( linkData[i].changeImg ) {
    var leftChangeImg = document.querySelector('#leftChange img');

    leftChangeImg.src = "game-left-2.gif";
    leftChangeImg.alt = "超級大牌";
  }
}