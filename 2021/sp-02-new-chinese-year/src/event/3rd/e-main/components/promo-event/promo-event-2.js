import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initBuildByCustomTime = [
  buildByCustomTime(linkTimePromo, [addAnchorLink, addImgSrc]),
];
// 第二顆誘因每日換品
function addAnchorLink(i){
  if (!linkDataPromo) return false;

  // var anchorChangeLink = document.getElementById('heroPromoLink');
  var anchorChangeLink2 = document.getElementById('promoAnchor2');
  var webLink = linkDataPromo[i].webLink;
  var mobileLink = linkDataPromo[i].mobileLink;
  var appLink = linkDataPromo[i].appLink;

  // anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
  anchorChangeLink2.href = makeLink(960, appLink, webLink, mobileLink);
}

function addImgSrc(i) {
  if (!imgData) return false;

  var promoImg = document.querySelector('#promoAnchor2 img');

  promoImg.src = imgData[i].imgSrc;
  promoImg.alt = imgData[i].alt;
}
