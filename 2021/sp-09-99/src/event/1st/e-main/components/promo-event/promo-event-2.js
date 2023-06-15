import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initBuildPromoByTime = [
  buildByCustomTime(promoLinkTime, [addAnchorLink, addImgSrc]),
];
// 第二顆誘因每日換品
function addAnchorLink(i){
  if (!promoLinkData) return false;

  var anchorChangeLink = document.getElementById('promoAnchor1');
  var webLink = promoLinkData[i].webLink;
  var mobileLink = promoLinkData[i].mobileLink;
  var appLink = promoLinkData[i].appLink;

  anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
  // anchorChangeLink2.href = makeLink(960, appLink, webLink, mobileLink);
}

function addImgSrc(i) {
  if (!promoImgData) return false;

  var promoImg = document.querySelector('#promoAnchor1 img');

  promoImg.src = promoImgData[i];
}
