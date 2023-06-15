import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { earlyDateHide } from 'utils/js/detect.js'

export var initGameDate = game2Ready();

function game2Ready() {
  if(!linkTime && !linkData) return false;
  
  var startDay = new Date().getDay();
  // console.log(startDay);
  var section = document.getElementById( 'gameW1M2' );

  if ( startDay > 0 && startDay < 6){
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用

    section.style.display = 'none';
    buildByCustomTime(linkTime, [addGameLink, addGameImgSrc], 100);
  }
}


// 每日換連結
function addGameLink(i){
  var gameChangeAnchor = document.getElementById('gameChangeAnchor');
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  gameChangeAnchor.href = makeLink(960, appLink, webLink, mobileLink);
}

function addGameImgSrc ( i ) {
  if ( linkData[i].toggleClass ) {
    var gameChange = document.getElementById('gameChange');

    gameChange.classList.toggle( 'close' );
  }

  var gameChangeImg = document.querySelector( '#gameChange img' );
  var changeImgNumber = linkData[i].changeImg;

  if ( changeImgNumber ) {
    gameChangeImg.src = "game-" + changeImgNumber +".png";
  } else  {
    gameChangeImg.src = "game-0.png";
  }
}