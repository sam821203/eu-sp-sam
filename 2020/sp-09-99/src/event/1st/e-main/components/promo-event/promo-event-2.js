import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
buildByCustomTime
export var initBuildByCustomTime = [
  buildByCustomTime(linkTime, addAnchorLink),
  buildByCustomTime(linkTime, addImgSrc),
];

function addAnchorLink(i){
  if (!linkData) return false;

  // var anchorChangeLink = document.getElementById('heroPromoLink');
  var anchorChangeLink2 = document.getElementById('promoAnchor2');
  var webLink = linkData[i].webLink;
  var mobileLink = linkData[i].mobileLink;
  var appLink = linkData[i].appLink;

  // anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
  anchorChangeLink2.href = makeLink(960, appLink, webLink, mobileLink);
}

function addImgSrc(i) {
  if (!imgData) return false;

  var promoImg = document.querySelector('#promoAnchor2 img');

  promoImg.src = imgData[i];
}
