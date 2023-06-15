import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initLeftRight = leftRightReady();

function leftRightReady() {
  if(!linkTime && !linkData) return false;

  var dateNow = new Date().getTime();

  if (dateNow >= new Date(linkTime[0]).getTime()) { // 活動開始就換圖
    var leftRightChange = document.getElementById('leftRightChange');

    leftRightChange.classList.remove('not-yet');
  }

  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(linkTime, [addLeftRightLink], 100);
}


// 每日換連結
function addLeftRightLink(i){
  // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
  // if (!dailyData || i >= 14) return false; // 第二波

  var leftRightChangeAnchor = document.getElementById('leftRightChangeAnchor');
  
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  leftRightChangeAnchor.href = makeLink(960, appLink, webLink, mobileLink);
}