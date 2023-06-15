import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initLeftRight = leftRightReady();

function leftRightReady() {
  if(!linkTime && !linkData) return false;

  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(linkTime, [addRightLink, addRightImgSrc], 100);
}


// 每日換連結
function addRightLink(i){
  var rightChangeAnchor = document.getElementById('rightChangeAnchor');
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  rightChangeAnchor.href = makeLink(960, appLink, webLink, mobileLink);
}

function addRightImgSrc ( i ) {
  if ( linkData[i].toggleClass ) {
    var rightChange = document.getElementById('rightChange');

    rightChange.classList.toggle( 'close' );
  }

  var rightChangeImg = document.querySelector( '#rightChange img' );
  var changeImgNumber = linkData[i].changeImg;

  if ( changeImgNumber ) {
    rightChangeImg.src = "game-right-" + changeImgNumber +".png";
  } else  {
    rightChangeImg.src = "game-right-0.png";
  }
}