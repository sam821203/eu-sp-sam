import { isApp } from 'utils/js/detect.js'
import { isWindowWidth } from 'utils/js/detect.js'
export var initChangePromoAnchor = buildChangeLink();

function buildChangeLink() {
  var targetIndex = 0;

  // 初始先執行過找出目前所在的區間
  for (var i = 0; i < linkTime.length - 1; i++) {
    countDownTimer();
  }
  // 繼續計時
  var timer = setInterval(function () {

    countDownTimer();
    
    // 結束時處理
    if (targetIndex > linkTime.length - 1) clearInterval(timer);
  }, 1000);

  // core 計算倒數，必須和targetIndex在同一function
  function countDownTimer() {
    if (!linkTime && !linkData) return false;

    var timeNow = new Date().getTime();
    var targetTime = new Date(linkTime[targetIndex]).getTime();
    var countDownTime = targetTime - timeNow;

    // hit & fire 
    if (countDownTime <= 0) {
      addAnchorLink(targetIndex);

      targetIndex++;
    }
  }
}



function addAnchorLink(i){
  // var anchorChangeLink = document.getElementById('heroPromoLink');
  var anchorChangeLink2 = document.getElementById('promoAnchor2');
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  // anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
  anchorChangeLink2.href = makeLink(960, appLink, webLink, mobileLink);
}

function makeLink(width, appLink, webLink, mobileLink) {
  var finalLink = isApp() ? appLink : isWindowWidth(width) ? webLink : mobileLink;
  if (!mobileLink) mobileLink = webLink;
  
  return finalLink;
}



